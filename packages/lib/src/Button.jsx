import React from 'react';
import classes from './styles.module.css';

const Button = ({ text }) => (
  <button className={classes.button}>Click Me: {text}</button>
);

export default Button;
