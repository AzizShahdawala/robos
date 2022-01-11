import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
    };
  }
  componentDidCatch(error, info){
      this.setState({showError: true})
  }

  render() {
    if (this.state.showError) {
      return <h1>Oooppss! Could not retrieve the data!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
