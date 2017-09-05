import React, { Component } from 'react';
import './App.css';
import { MazeView } from './MazeView';
import MazeBuilder from './MazeBuilder';
import Avatar from './Avatar';
import Controller from './Controller';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <MazeView />
        <Controller />
      </div>
    );
  }
}

export default App;
