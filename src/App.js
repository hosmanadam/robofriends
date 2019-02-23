import React, { Component } from 'react';
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const filteredRobots = robots.filter(
        (robot) => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        < SearchBox searchChange={this.onSearchChange} />
        < CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;