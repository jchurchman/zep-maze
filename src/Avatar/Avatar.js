import React from 'react';
import { emojify } from 'react-emojione';
import { UP, DOWN, LEFT, RIGHT } from '../Controller/Controller.constants';
import { connect } from 'react-redux';


export function Avatar({ stance }) {
    switch(stance) {
        case UP: return ( <div className="Avatar"> emojify( ':point_up_tone3:' ) </div> );
        case DOWN: return ( <div className="Avatar"> emojify( ':point_down_tone3:' ) </div> );
        case RIGHT: return ( <div className="Avatar"> emojify(':point_right_tone3:') </div> );
        case LEFT: return ( <div className="Avatar"> emojify( ':point_left_tone3:' ) </div> );
        default: return ( <div className="Avatar"> emojify( ':levitate_tone3:' ) </div>);
    }
}
export default connect (state => state)(Avatar);