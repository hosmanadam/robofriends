import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
        <div className="pa2 stick">
          <input
              className="pa3 ba b--green"
              type="search"
              placeholder="search robots"
              onChange={this.props.searchChange}
          />
        </div>
    )
  }
}

export default SearchBox;
