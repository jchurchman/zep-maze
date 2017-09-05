import React from 'react';
import {emojify} from 'react-emojione';
import { UP, DOWN, LEFT, RIGHT } from './Controller.constants';

export function Avatar({ stance }) {
    switch(stance) {
        case UP: return ( <div> emojify( ':point_up_tone3:' ) </div> );
        case DOWN: return ( <div> emojify( ':point_down_tone3:' ) </div> );
        case RIGHT: return ( <div> emojify(':point_right_tone3:') </div> );
        case LEFT: return ( <div> emojify( ':point_left_tone3:' ) </div> );
        default: return ( <div> emojify( ':levitate_tone3:' ) </div>);
    }
}