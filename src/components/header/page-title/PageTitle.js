import React from 'react';

export default class PageTitle extends React.Component {
  render() {
    return (
      <h1 className="title"> {this.props.pageTitle} </h1>
    );
  }
}
