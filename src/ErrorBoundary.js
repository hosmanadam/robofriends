import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return (
          <div className="error-message">
            <h2>Oooops, something went wrong in the cyberspace...</h2>
            <p>Do try again later!</p>
          </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
