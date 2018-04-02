import React from 'react';
import BlackRectangle from './black-rectangle/BlackRectangle.js'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BlackRectangle pageTitle={this.props.pageTitle} />
      </div>
    );
  }
}

export default Header;
