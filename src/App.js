import React, { Component } from 'react';
import './App.css';
import { MazeView } from './MazeView/MazeView';
import MazeBuilder from './MazeBuilder/MazeBuilder';
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
        <MazeView />
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
