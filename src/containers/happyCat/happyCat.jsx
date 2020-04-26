import React from 'react';
import './happyCatStyle.sass';

import StartScreen from './partials/startScreen';
import GameScreen from './partials/gameScreen';
import FinalScreen from './partials/startScreen';

const SCREENS = {
  startScreen: {
    name: 'startScreen',
    element: <StartScreen/>,
  },
  gameScreen: {
    name: 'gameScreen',
    element: <GameScreen/>,
  },
  finalScreen: {
    name: 'finalScreen',
    element: <FinalScreen/>,
  },
};

const HappyCat = ({currentScreen}) => {
  return <div className="happy-cat">{SCREENS[currentScreen].element}</div>;
};

export default HappyCat;

HappyCat.defaultProps = {
  currentScreen: 'startScreen',
};
