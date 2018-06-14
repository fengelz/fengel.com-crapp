import React from "react";
// import { Context } from "./RootProvider";

import Post from "../modules/molecules/Post";
import Loader from "../modules/atoms/Loader";

// const PostContainer = props => (
//   <Context.Consumer>
//     {context => <PostHandler {...props} context={context} />}
//   </Context.Consumer>
// );

class PostContainer extends React.Component {
  render() {
    const content = null;
    return (
      <div>Test</div>
      // <Context.Consumer>
      //   {data => {
      //     const content = data.content(this.props.match.url);
      //     return content ? <Post post={content.content} /> : <Loader />;
      //   }}
      // </Context.Consumer>
    );
  }
}

export default PostContainer;
