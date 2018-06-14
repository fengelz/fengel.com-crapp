import React from 'react'
import { Context } from './Provider'
import { fetchPosts } from '../wpService.js'

import RoutingComponent from './RoutingComponent'
import Home from '../modules/organisms/Home'
import Loader from '../modules/atoms/Loader'

const HomeContainer = (props) => (
  <Context.Consumer>
    {(context) => <HomeHandler {...props} context={context} />}
  </Context.Consumer>
)

class HomeHandler extends React.PureComponent {
  constructor() {
    super()
    this.state = { content: null }
  }

  componentDidMount() {
    fetchPosts().then((response) => {
      this.setState({ content: response })
    })
  }

  render() {
    return this.state.content ? (
      <Home posts={this.state.content} />
    ) : (
      <div>loadng</div>
    )
  }
}

export default HomeContainer
