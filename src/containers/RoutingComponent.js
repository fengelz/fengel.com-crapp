import React from 'react'
import { withRouter } from 'react-router-dom'

class RoutingComponent extends React.Component {
  constructor() {
    super()
    this.state = { routeChanged: false }
  }

  componentDidUpdate(prevProps) {
    const { context, location, match } = this.props
    console.log('did update', context, location)
    if (location !== prevProps.location) {
      if (context.actions.hasContent(match)) {
        console.log('new route')
      } else {
        context.actions.fetchContent(match)
      }
    }
  }
}

export default withRouter(RoutingComponent)
