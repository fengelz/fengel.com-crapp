import axios from 'axios'

const routes = {
  uri: 'https://wordpress.fengel.com/wp-json',
  pages: '/wp/v2/pages/',
  posts: '/wp/v2/posts/?per_page=100',
  menus: '/wp-api-menus/v2/menus',
  categories: '/wp/v2/categories',
  tags: '/wp/v2/tags',
}

const fetchRoot = () => {
  return axios
    .get(routes.uri)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchPages = () => {
  return axios
    .get(routes.uri + routes.pages)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchPosts = (taxonomy, id) => {
  const filter = taxonomy && id ? `&${taxonomy}=${id}` : ''
  const uri = `${routes.uri}${routes.posts}${filter}`
  return axios
    .get(uri)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchPostById = (id) => {
  const uri = `${routes.uri}${id}`
  return axios
    .get(uri)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}
const fetchPostBySlug = (slug) => {
  const filter = slug ? `&slug=${slug}` : ''
  const uri = `${routes.uri}${routes.posts}${filter}`
  return axios
    .get(uri)
    .then((response) => JSON.parse(response))
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchMenus = () => {
  return axios
    .get(routes.uri + routes.menus)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchMenu = (id) => {
  return axios
    .get(` ${routes.uri}${routes.menus}/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

const fetchCategories = () => {
  return axios
    .get(routes.uri + routes.categories)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}
const fetchTags = () => {
  return axios
    .get(routes.uri + routes.tags)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Err', err)
    })
}

export {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchMenus,
  fetchMenu,
  fetchCategories,
  fetchTags,
  fetchPostById,
  fetchPostBySlug,
}
