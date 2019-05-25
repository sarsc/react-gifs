import React, { Component } from 'react';

import Gif from './gif.jsx';

const GifList = (props) => {
  // renderlist = () => {
  //   return props.gifs.map(gif => <Gif id={gif.id} key={gif.id}/>);
  // };

  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};


export default GifList;
