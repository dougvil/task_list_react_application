import React, { Component } from 'react';

import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar teste={"TList"}/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
