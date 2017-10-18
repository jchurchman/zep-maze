import React, { Component } from 'react';
import './App.css';
import MazePlayerContainer from './MazePlayer/MazePlayerContainer';
import styled from 'styled-components';
import Navigate from './Navigate/Navigate';
import Home from './Home/Home';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

const Hat = styled.div`
background-color: #226764;
border-bottom: 4px outset #22223B;
h1 {
  text-align: center;
  font-family: 'Monoton', cursive;
  color: #87BCDE;
  font-size: 10vw;
  letter-spacing: 4px;
  font-weight: normal;
}
`

const Shoe = styled.div`
border-top: 4px outset #22223B;
background-color: #226764;
text-align: center;
padding-top: 5px;
position: fixed;
left: 0;
bottom: 0;
right: 0;
z-index: 5;
clear: both;
p {
  color: #87BCDE;
}
`

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Hat>
            <h1>Zep Maze!</h1>
            <Navigate/>
          </Hat>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/player" component={MazePlayerContainer} />
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/instructions" component={Instructions} /> */}
            {/* <Route path="/builder" component={MazeBuilderContainer} /> */}
            <Redirect to="/" />
          </Switch>
          <Shoe>
            <p id="copyright">&copy;Joe Churchman 2017</p>
          </Shoe>
        </div>
      </Router>
    );
  }
}

export default App;