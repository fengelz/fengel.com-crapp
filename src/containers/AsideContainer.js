import React from 'react'
import { Context } from './Provider'
import Aside from '../components/molecules/Aside'

class AsideContainer extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ state }) => {
          return (
            <Aside
              categories={state.categories}
              tags={state.tags}
              menus={state.menus}
              toggleMenu={state.toggleMenu}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default AsideContainer
