import React, { Component } from 'react';
import './App.css';
import './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
