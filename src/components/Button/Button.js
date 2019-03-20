import React, { Component } from 'react';
import styles from './Button.module.css';

const Button = props => {

    return (
        <button type="button" className={`${styles['button']} ${styles[props.variant]} ${styles['buttonup']} ${styles['buttondown']}`}
        
        >
            {props.children}
        </button>
    );
};

export default Button;