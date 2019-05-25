import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderlist = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }
  render () {
    return (
      <div className="gif-list">
        {this.renderlist()}
      </div>
    );
  }
}

export default GifList;
