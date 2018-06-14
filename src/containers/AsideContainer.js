import React, { Component } from 'react'

import { connect } from '../store'
import Aside from '../modules/molecules/Aside'

class AsideContainer extends Component {
  render() {
    return (
            <Aside
              categories={
                root.categories
              }
              tags={root.tags}
              menus={root.menus}
            />
    )
  }
}

export default connect(({ root }) => ({ root }))(AsideContainer)
