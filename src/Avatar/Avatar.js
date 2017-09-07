import React from 'react';
import  { emojify } from 'react-emojione';
import { connect } from 'react-redux';
import styles from './Avatar.css'

export default function Avatar() {
    
    return ( <div className={styles.avatar}> {emojify(':wink:')} </div>);
}
