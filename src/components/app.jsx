import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {

  // constructor(props) {
  //   super(props);
  // }
  render() {
    const gifs = [
      { id: "wqb5K5564JSlW" },
      { id: "SxKjln0CeeRck" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="2FhASosZtLUPe" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
