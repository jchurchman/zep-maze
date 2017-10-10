import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MazePlayerContainer from './MazePlayer/MazePlayerContainer';
import Home from './Home/Home';



class App extends Component {

  render() {
    return (
      <Router>
        <Home>
          <MazePlayerContainer/>
        </Home>
      </Router>
    );
  }
}

export default App;