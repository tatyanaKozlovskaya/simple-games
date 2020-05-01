import React from 'react';

import '../spiderCatStyle.sass';
import './startScreen.sass';

import Button from '../components/Button';

const startScreen = ({ changeCurrentScreenAction }) => {
  return (
    <div className="spider-cat-start-screen">
      <Button
        key="4"
        text="Play!"
        clickHandler={() =>
          changeCurrentScreenAction({ currScreenName: 'gameScreen' })
        }
      />
    </div>
  );
};

export default startScreen;
