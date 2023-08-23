import React from 'react';
import Button from 'my-lib/Button';
import classes from './styles.module.css';

const App = () => (
  <div className={classes.app}>
    <h1>Hello</h1>
    <Button text={'Hello World!'} />
  </div>
);

export default App;
