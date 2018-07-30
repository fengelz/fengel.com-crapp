import React from 'react'

import {
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchTags,
  fetchMenus,
} from '../wpService.js'

import Loader from '../components/atoms/Loader'

const Context = React.createContext()

class Provider extends React.Component {
  constructor() {
    super()

    this.state = {
      root: {},
      pages: [],
      menus: [],
      categories: [],
      tags: [],
      cache: [],
      loading: true,
      menuOpen: false,
      toggleMenu: () => {
        this.setState({ menuOpen: !this.state.menuOpen })
      },
      closeMenu: () => {
        this.setState({ menuOpen: false })
      },
    }

    this.getPosts = (match) => {
      if (match.url === '/') return this.state.posts
      else {
        if (match.path.indexOf('/tag/') > -1) {
          const taxId = this.state.tags.find((tag) => {
            return tag.slug === match.params.slug
          }).id
          return this.state.posts.filter((post) => {
            return post.tags.indexOf(taxId) >= 0
          })
        } else if (match.path.indexOf('/category/') > -1) {
          const taxId = this.state.categories.find((category) => {
            return category.slug === match.params.slug
          }).id
          return this.state.posts.filter((post) => {
            return post.categories.indexOf(taxId) >= 0
          })
        }
      }
    }
    this.getPost = (slug) => {
      return this.state.posts.find((post) => {
        return post.slug === slug
      })
    }
    this.getTaxBySlug = (slug) => {
      const taxes = this.state.categories.concat(this.state.tags)
      return taxes.find((tax) => {
        return tax.slug === slug
      })
    }
  }

  componentDidMount() {
    let { menus, categories, tags, pages, posts, root } = {}
    fetchMenus()
      .then((response) => (menus = response))
      // .then(fetchRoot)
      // .then((response) => {
      //   root = response
      // })
      .then(fetchCategories)
      .then((response) => {
        categories = response
      })
      .then(fetchTags)
      .then((response) => {
        tags = response
      })
      .then(fetchPages)
      .then((response) => {
        pages = response
      })
      .then(fetchPosts)
      .then((response) => {
        posts = response.sort((x, y) => {
          return x.sticky === y.sticky ? y.id - x.id : x.sticky ? -1 : 1
        })
        this.setState({
          root,
          menus,
          categories,
          tags,
          pages,
          posts,
          loading: false,
        })
      })
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            getPosts: (match) => this.getPosts(match),
            getPost: (slug) => this.getPost(slug),
            toggleMenu: () => this.toggleMenu,
            getTaxBySlug: (slug) => this.getTaxBySlug(slug),
          },
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, Provider }
