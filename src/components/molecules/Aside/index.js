import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Header from '../Header'
import SwipeArea from '../../atoms/SwipeArea'

class Aside extends React.PureComponent {
  render() {
    const { pathname } = this.props.location
    return (
      <aside className="mol-2a2c1466-55b6-4b02-9bd9-3261469c7c29">
        <SwipeArea swipedLeft={this.props.toggleMenu}>
          <Header
            toggleMenu={this.props.toggleMenu}
            className={'aside'}
            close={true}
          />
          <nav>
            <ul>
              <li className={pathname === '/' ? 'active' : ''}>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <h3>Pages:</h3>
                  </li>
                  {this.props.menu.items.map((link) => {
                    return link.object === 'custom' ? (
                      <li key={link.id}>
                        <a target="blank" href={link.url}>
                          {link.title}
                        </a>
                      </li>
                    ) : (
                      <li>
                        <Link to={`/${link.object_slug}`}>{link.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <h3>Categories:</h3>
                  </li>
                  {this.props.categories.map((cat) => {
                    return (
                      <li
                        className={
                          pathname === `/category/${cat.slug}` ? 'active' : ''
                        }
                        key={cat.id}>
                        <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <h3>Tags:</h3>
                  </li>
                  {this.props.tags.map((tag) => {
                    return (
                      <li
                        className={
                          pathname === `/tag/${tag.slug}` ? 'active' : ''
                        }
                        key={tag.id}>
                        <Link to={`/tag/${tag.slug}`}>{tag.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </SwipeArea>
      </aside>
    )
  }
}

export default withRouter(Aside)
