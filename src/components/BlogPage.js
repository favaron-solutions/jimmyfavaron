import React from 'react';
import Navigation from './header/Navigation.js'
import BlogBody from './blog/BlogBody.js'

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <body>
          <BlogBody pageTitle={this.props.pageTitle}/>
        </body>
      </div>
    );
  }
}
