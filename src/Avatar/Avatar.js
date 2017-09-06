import React from 'react';
import  Emojify from 'react-emojione';
import { connect } from 'react-redux';
import styles from './Avatar.css'

export default function Avatar() {
    
    return ( <div className={styles.avatar}> <Emojify><span>:wink:</span></Emojify> </div>);
}
