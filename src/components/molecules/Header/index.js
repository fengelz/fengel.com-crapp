import React from 'react'

import ToggleMenuButton from '../../atoms/ToggleMenuButton'

class Header extends React.Component {
  render() {
    return (
      <header
        className={`mol-b684bb38-10a7-4f15-81fe-8e7d413b4d33 ${this.props
          .className || ''} ${this.props.close ? 'close' : ''}`}>
        <ToggleMenuButton onClick={this.props.toggleMenu} />
      </header>
    )
  }
}

export default Header
