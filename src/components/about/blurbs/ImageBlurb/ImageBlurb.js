import React from 'react';
import jimmy from '../../../../assets/jimmy.jpeg';

export default class ImageBlurb extends React.Component {
  render() {
    return (
      <div>
        <img src={jimmy}/>
      </div>
    );
  }
}
