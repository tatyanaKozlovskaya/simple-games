import React from 'react';

import './../happyCatStyle.sass';
import './finalScreen.sass';

import Button from './../components/Button';

const finalScreen = ({ score, restartAction }) => {
  const result = score ? 'You win!' : 'You loose :(';
  return (
    <div className="happy-cat-final-screen">
      <div className='happy-cat-section'>
        <h1>{result}</h1>
        <Button key={'1'} text={'Play Again!'} clickHandler={restartAction} />
      </div>
    </div>
  );
};

export default finalScreen;
