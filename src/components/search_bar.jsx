import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleEvent = (event) => {
    this.props.searchFun(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleEvent}
      />
    );
  }
}


export default SearchBar;
