import React, { Component } from 'react';
import './App.css';
import { MazePlayer } from './MazePlayer/MazePlayer';
import MazeMapper from './MazeMapper/MazeMapper';
import Avatar from './Avatar/Avatar';
import Controller from './Controller/Controller';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <MazePlayer />
        <Controller />
      </div>
    );
  }
}

export default connect (
  state => ({
    matrix: state.matrix,
    x: state.x,
    y: state.y
  }))(App)
