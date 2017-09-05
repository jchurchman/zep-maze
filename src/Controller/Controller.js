import React, { Component } from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import { connect } from 'react-redux';

class Controller extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keypress', function(event) {
            if( event.keycode === 38 ) return this.state.dispatch(goUP());
            if( event.keycode === 40 ) return this.state.dispatch(goDOWN());
            if( event.keycode === 37 ) return this.state.dispatch(goLEFT());
            if( event.keycode === 39 ) return this.state.dispatch(goRIGHT());
        })
    }

    componentWillUnmount(){
        window.removeEventListener();
    }

    render() {
        return (
            <div className="Button-Bar">
                <button onClick={this.state.dispatch(goUP)}>Up</button>
                <button onClick={this.state.dispatch(goDOWN)}>Down</button>
                <button onClick={this.state.dispatch(goLEFT)}>Left</button>
                <button onClick={this.state.dispatch(goRIGHT)}>Right</button>
            </div>
        )
    }
}

export default connect (state => state)(Controller);