import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import MazePlayerContainer from './MazePlayer/MazePlayerContainer';
// import Navigation from './Home/Navigation';
import styled from 'styled-components';
import Home from './Home/Home';



class App extends Component {

  render() {
    return (
      <div>
        <Home>
          <MazePlayerContainer/>
        </Home>
      </div>
    );
  }
}

export default App;