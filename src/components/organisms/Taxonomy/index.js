import React from 'react'

import Posts from '../Posts'
import Intro from '../../molecules/Intro'
import { Helmet } from 'react-helmet'
import renderHTML from 'react-render-html'

class Taxonomy extends React.Component {
  render() {
    const { posts, h1, full } = this.props
    return (
      <div className="org-ddb77b2f-e017-46fe-b6ca-ee1a210ced97">
        <Helmet>
          <title>Sune Fengel » {renderHTML(h1)}</title>
        </Helmet>
        <Intro>
          <h1>{h1}</h1>
          <p>Go on, have a look see...</p>
        </Intro>

        <Posts full={full} posts={posts} />
      </div>
    )
  }
}

export default Taxonomy
