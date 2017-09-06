import React, { Component } from 'react';
import './App.css';
import MazePlayerContainer from './MazePlayer/MazePlayerContainer';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <MazePlayerContainer />
      </div>
    );
  }
}

export default App;