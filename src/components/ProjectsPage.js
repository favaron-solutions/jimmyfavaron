import React from 'react';
import Navigation from './header/Navigation.js'
import ProjectsBody from './projects/ProjectsBody.js'

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <body>
          <ProjectsBody pageTitle={this.props.pageTitle}/>
        </body>
      </div>
    );
  }
}
