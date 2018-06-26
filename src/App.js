import React, { Component } from 'react';

import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar teste={"Ahaaam"}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
