import React from 'react';
import MicroFrontend from './MicroFrontend';
import classes from './styles.module.css';

const App = () => (
  <div className={classes.app}>
    <h1>Hello</h1>

    <MicroFrontend
      id={'Button1'}
      url="http://localhost:3001"
      props={{
        text: 'Hello World!',
      }}
    />
  </div>
);

export default App;
