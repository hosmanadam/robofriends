import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import ErrorBoundary from './ErrorBoundary'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter(
        (robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    if (!robots.length) {
      return <h1>Loading robots...</h1>
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </div>
    )}
  }
}

export default App;
