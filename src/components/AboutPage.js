import React from 'react';
import Navigation from './header/Navigation.js';
import AboutBody from './about/AboutBody.js';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <body>
          <AboutBody/>
        </body>
      </div>
    );
  }
}
