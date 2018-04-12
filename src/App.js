import React, { Component } from 'react';
import './bootstrap.css';
import HomePage from './components/HomePage.js'
import AboutPage from './components/AboutPage.js'
import BlogPage from './components/BlogPage.js'
import ProjectsPage from './components/ProjectsPage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact={true} path="/" render={() => (
                    <HomePage pageTitle="Home"/>
              )}/>
              <Route path="/about" render={() => (
                    <AboutPage pageTitle="About"/>
              )}/>
              <Route path="/blog" render={() => (
                    <BlogPage pageTitle="Blog"/>
              )}/>
              <Route path="/projects" render={() => (
                    <ProjectsPage pageTitle="Projects"/>
              )}/>
              <Route path="/aboutSite" render={() => (
                    <ProjectsPage pageTitle="About This Site"/>
              )}/>
          </div>
        </Router>
    );
  }
}

export default App;
