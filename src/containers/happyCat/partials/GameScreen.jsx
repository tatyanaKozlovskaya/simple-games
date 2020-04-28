import React, { Component } from 'react';

import './../happyCatStyle.sass';
import './gameScreen.sass';

import Button from './../components/Button';

class gameScreen extends Component {
  changeScore = (item) => {
    const { changeScoreAction } = this.props;

    changeScoreAction({
      score: item === 'right' ? 1 : 0,
      currScreenName: 'finalScreen',
    });
  };

  render() {
    return (
      <div className="happy-cat-game-screen">
        <Button text="left" clickHandler={() => this.changeScore('left')} />
        <Button text="right" clickHandler={() => this.changeScore('right')} />
      </div>
    );
  }
}

export default gameScreen;
