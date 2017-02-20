import React, { Component } from 'react';
import './routes.js';
import NavBar from './components/navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
