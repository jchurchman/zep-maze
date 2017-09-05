import React, { Component } from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import { connect } from 'react-redux';

class Controller extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keypress', function(event) {
            if( event.keycode === 38 ) return goUP();
            if( event.keycode === 40 ) return goDOWN();
            if( event.keycode === 37 ) return goLEFT();
            if( event.keycode === 39 ) return goRIGHT();
        })
    }

    componentWillUnmount(){
        window.removeEventListener();
    }

    render() {
        return (
            <div className="Button-Bar">
                <button onClick={goUP}>Up</button>
                <button onClick={goDOWN}>Down</button>
                <button onClick={goLEFT}>Left</button>
                <button onClick={goRIGHT}>Right</button>
            </div>
        )
    }
}

export default connect (state => state)(Controller);