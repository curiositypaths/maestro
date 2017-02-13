import React, { Component } from 'react';
import './App.css';
// import { Router, Route, Link } from 'react-router'
import './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <h2>Welcome to Maestro</h2>
        </div>
        <p className="App-intro">
          Learning trails about programming, design and&hellip;
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
