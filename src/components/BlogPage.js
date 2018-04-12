import React from 'react';
import Header from './header/Header.js'
import BlogBody from './blog/BlogBody.js'

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <BlogBody/>
        </body>
      </div>
    );
  }
}
