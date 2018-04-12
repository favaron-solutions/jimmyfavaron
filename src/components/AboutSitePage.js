import React from 'react';
import Navigation from './header/Navigation.js';
import AboutSiteBody from './about/AboutSiteBody.js';

export default class AboutSitePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <body>
          <AboutSiteBody/>
        </body>
      </div>
    );
  }
}
