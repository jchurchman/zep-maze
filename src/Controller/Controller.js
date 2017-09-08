import React, { Component } from 'react';

class Controller extends Component {
    
    handleMove = (event) => {
        if( event.keyCode === 38 ) return this.props.goUP();
        if( event.keyCode === 40 ) return this.props.goDOWN();
        if( event.keyCode === 37 ) return this.props.goLEFT();
        if( event.keyCode === 39 ) return this.props.goRIGHT();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleMove );
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleMove );
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