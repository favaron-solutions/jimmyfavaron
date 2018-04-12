import React from 'react';
import Header from './header/Header.js'
import HomeBody from './home/HomeBody.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <HomeBody/>
        </body>
      </div>
    );
  }
}
