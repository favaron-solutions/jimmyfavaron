import React from 'react';
import Navigation from './header/Navigation.js'
import HomeBody from './home/HomeBody.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <body>
          <HomeBody pageTitle={this.props.pageTitle}/>
        </body>
      </div>
    );
  }
}
