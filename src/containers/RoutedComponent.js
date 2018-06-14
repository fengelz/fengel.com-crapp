import React from 'react'

class RoutedComponent extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({routeChanged:true})
    }
  }
  render() {
    return this.children
  }
}

export default RoutedComponent
