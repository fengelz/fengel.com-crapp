import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Html from '../../atoms/Html'

class Posts extends React.Component {
  render() {
    const { posts } = this.props
    if (posts === null) return null
    return (
      <div className="org-a9ca065c-a467-47bb-a252-2138bff1cb1d">
        {posts.map((post) => {
          moment.locale('DA')
          return (
            <div className="post" key={post.id}>
              <h2>
                <Link to={`/${post.slug}`}>
                  <Html content={post.title.rendered} />
                </Link>
              </h2>
              <Html
                content={
                  this.props.full
                    ? post.content.rendered
                    : post.excerpt.rendered
                }
              />
              <time>{moment(post.date).format('Do MMM YYYY')}</time>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posts
