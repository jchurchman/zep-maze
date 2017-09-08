import React from 'react';
import  { emojify } from 'react-emojione';
import styles from './Avatar.css'

export default function Avatar() {
    
    return ( <div className={styles.avatar}> {emojify(':wink:', { style: {top: 0}})} </div>);
}
