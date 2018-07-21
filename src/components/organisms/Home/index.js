import React from 'react'

import Posts from '../Posts'
import Intro from '../../molecules/Intro'

class Home extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <div className="org-8931390c-6aa9-4f38-a625-82028bf97d55">
        <Intro>
          <h1>A CRApp / Wordpress powered creative outlet</h1>
          <p>
            Hi. My name is Sune. This is my creative outlet of music, code and
            artsy fartsy shit.
          </p>
          <p>Go on, have a look see...</p>
        </Intro>

        <Posts posts={posts} />
      </div>
    )
  }
}

export default Home
