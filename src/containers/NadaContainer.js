import React from 'react'
import { Context } from './Provider'

class NadaContainer extends React.PureComponent {
  render() {
    // const { match } = this.props
    return (
      <Context.Consumer>
        {({ actions }) => {
          return (
            <div>
              <h3 style={{ textAlign: 'center', padding: '2rem' }}>
                Pardon. The Url yer looking for does not exist...
              </h3>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default NadaContainer
