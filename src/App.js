import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import ErrorBoundary from './ErrorBoundary'

import {connect} from 'react-redux';
import {setSearchField, requestRobots} from './actions';


const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.robotData.robots,
  isPending: state.robotData.isPending,
  error: state.robotData.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  requestRobots: () => dispatch(requestRobots),
});


class App extends Component {

  componentDidMount() {
    this.props.requestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(
        (robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    if (isPending) {
      return <h1>Loading robots...</h1>
    }
    if (error) {
      return (
        <div className="error-message">
          <h2>{`Oops, we got an error: ${error.message}`}</h2>
          <p>Do try again later!</p>
        </div>
      )}
    else {
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
