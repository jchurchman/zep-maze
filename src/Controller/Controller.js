import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonBar = styled.div`
    text-align: center;
    margin-top: 2vw;
`

const DirButton = styled.button`
    background-color: #226764;
    margin: .3vw;
    padding: .5vw;
    width: 8vw;
    height: 8vw;
    border: 4px outset #D0AC4C;
    border-radius: 8px;
    font-size: 4vw;
    color: #D0AC4C;
`

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
            <ButtonBar>
                <DirButton onClick={this.props.goUP}>▲</DirButton>
                <br/>
                <DirButton onClick={this.props.goLEFT}>◀</DirButton>
                <DirButton onClick={this.props.goRIGHT}>▶</DirButton>
                <br/>
                <DirButton onClick={this.props.goDOWN}>▼</DirButton>
            </ButtonBar>
        )
    }
}

export default Controller;