import React from 'react';

import Digital from './digital/container';
import Calendar from './calendar/container';
import './app.css';

export default () => {
  return (
    <div className="appContainer">
      <div className="center">
        <div className="flex">
          <Digital />
          <Calendar />
        </div>
      </div>
    </div>
  )
};
