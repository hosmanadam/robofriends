import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import ErrorBoundary from './ErrorBoundary'



import {connect} from 'react-redux';
import {setSearchField} from './actions';

const mapStateToProps = (state) => ({
    searchField: state.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(
        (robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    if (!robots.length) {
      return <h1>Loading robots...</h1>
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </div>
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
