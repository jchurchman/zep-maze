import React from 'react';
import styles from './MazePlayer.css';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';

import { goUP, goDOWN, goRIGHT, goLEFT } from '../Controller/Controller.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        matrix: state.maze.matrix,
        x: state.x,
        y: state.y
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getMazes());
    return bindActionCreators({ goDOWN, goUP, goLEFT, goRIGHT }, dispatch);
}

export function MazePlayer() {
    return (
        <div className={styles}>
            <MazeMapper />
            <Avatar />
        </div>
    )
}