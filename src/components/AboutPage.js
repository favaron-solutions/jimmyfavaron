import React from 'react';
import Header from './header/Header.js';
import Divider from './divider/Divider.js';
import AboutBody from './about/AboutBody.js';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <AboutBody/>
        </body>
      </div>
    );
  }
}
