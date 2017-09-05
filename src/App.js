import React, { Component } from 'react';
import './App.css';
import { MazeView } from './MazeView';
import { MazeBuilder } from './MazeBuilder';
import { Avatar } from './Avatar';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <MazeView MazeBuilder={MazeBuilder} Avatar={Avatar} />
    );
  }
}

export default App;
