import createStore from "react-waterfall";

import {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchTags,
  fetchMenus,
  fetchPostById,
  fetchPostBySlug
} from "../wpService.js";

const config = {
  initialState: {
    pages: {
      loading: false
    },
    root: {
      base: {},
      pages: [],
      menus: [],
      categories: [],
      tags: [],
      loading: true
    }
  },
  actionCreators: {
    loadRoot: async (_, actions, trigger) => {
      fetchRoot()
        .then(response =>
          this.setState({
            root: { base: response }
          })
        )
        .then(fetchMenus)
        .then(response => {
          this.setState({
            root: { menus: response }
          });
        })
        .then(fetchCategories)
        .then(response => {
          this.setState({
            root: { categories: response }
          });
        })
        .then(fetchTags)
        .then(response => {
          this.setState({
            root: { tags: response }
          });
        })
        .then(fetchPages)
        .then(response => {
          this.setState({
            root: { pages: response },
            loading: false
          });
        });
    },
    getPost: async (_, actions, trigger) => {
      if (!trigger) await actions.getMovies(true);
      else return { movies: { loading: true } };

      const data = await fetchPostBySlug();
      return { movies: { loading: false, data } };
    }
  }
};

export const { Provider, connect, actions } = createStore(config);
