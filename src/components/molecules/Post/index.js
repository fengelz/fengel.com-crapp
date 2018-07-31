import React from 'react'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import renderHTML from 'react-render-html'

import Html from '../../atoms/Html'
import Intro from '../../molecules/Intro'

class Post extends React.PureComponent {
  render() {
    const { post } = this.props
    return (
      <article className="mol-28055d40-87fd-4b8c-925d-c061f7d075d2">
        <Helmet>
          <title>Sune Fengel » {renderHTML(post.title.rendered)}</title>
        </Helmet>
        <Intro>
          <h1>
            <Html content={post.title.rendered} />
          </h1>
        </Intro>
        <div className="content">
          <p className={'published'}>
            <strong>
              <time>{moment(post.date).format('Do MMM YYYY')}</time> :
            </strong>
          </p>
          <Html content={post.content.rendered} />
        </div>
      </article>
    )
  }
}

export default Post
