import React, { Component } from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import { connect } from 'react-redux';

class Controller extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keypress', function(event) {
            if( event.keycode === 38 ) return this.props.dispatch(goUP());
            if( event.keycode === 40 ) return this.props.dispatch(goDOWN());
            if( event.keycode === 37 ) return this.props.dispatch(goLEFT());
            if( event.keycode === 39 ) return this.props.dispatch(goRIGHT());
        })
    }

    componentWillUnmount(){
        window.removeEventListener();
    }

    render() {
        return (
            <div className="Button-Bar">
                <button onClick={this.props.dispatch(goUP)}>Up</button>
                <button onClick={this.props.dispatch(goDOWN)}>Down</button>
                <button onClick={this.props.dispatch(goLEFT)}>Left</button>
                <button onClick={this.props.dispatch(goRIGHT)}>Right</button>
            </div>
        )
    }
}

export default Controller;