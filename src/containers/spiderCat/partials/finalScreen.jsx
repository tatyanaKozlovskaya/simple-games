import React from 'react';

import '../spiderCatStyle.sass';
import './finalScreen.sass';

import Button from '../components/Button';

const finalScreen = ({ score, restartAction }) => {
  const result = score > 0 ? 'You win!' : 'You loose :(';
  return (
    <div className="spider-cat-final-screen">
      <div className="spider-cat-section">
        <h1>{result}</h1>
        <Button key={'1'} text={'Play Again!'} clickHandler={restartAction} />
      </div>
    </div>
  );
};

export default finalScreen;
