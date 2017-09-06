import React, { Component } from 'react';
// import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import { connect } from 'react-redux';

class Controller extends Component {
    
    constructor(props) {
        super(props);
    }

    handleMove = ({keycode}) => {
        if( keycode === 38 ) return this.props.goUP();
        if( keycode === 40 ) return this.props.goDOWN();
        if( keycode === 37 ) return this.props.goLEFT();
        if( keycode === 39 ) return this.props.goRIGHT();
    }

    componentDidMount() {
        window.addEventListener('keypress', this.handleMove );
    }

    componentWillUnmount(){
        window.removeEventListener('keypress', this.handleMove );
    }

    render() {
        return (
            <div className="Button-Bar">
                <button onClick={this.props.goUP}>Up</button>
                <button onClick={this.props.goDOWN}>Down</button>
                <button onClick={this.props.goLEFT}>Left</button>
                <button onClick={this.props.goRIGHT}>Right</button>
            </div>
        )
    }
}

export default Controller;