import React from 'react';
import Header from './header/Header.js'
import ProjectsBody from './projects/ProjectsBody.js'

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <ProjectsBody/>
        </body>
      </div>
    );
  }
}
