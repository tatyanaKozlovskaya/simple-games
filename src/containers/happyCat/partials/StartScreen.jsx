import React from 'react';

import './../happyCatStyle.sass';
import './startScreen.sass';

import Button from './../components/Button';

const startScreen = ({ changeCurrentScreenAction }) => {

  return (
    <div className="happy-cat-start-screen">
      <Button
        text="Play!"
        clickHandler={() =>
          changeCurrentScreenAction({ currScreenName: 'gameScreen' })
        }
      />
    </div>
  );
};

export default startScreen;
