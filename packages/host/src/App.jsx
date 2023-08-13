import React from 'react';
import classes from './styles.module.css';

const App = () => {
  const Button = window?.Components?.Button;

  return (
    <div className={classes.app}>
      <h1>Hello</h1>
      <Button />
    </div>
  );
};

export default App;
