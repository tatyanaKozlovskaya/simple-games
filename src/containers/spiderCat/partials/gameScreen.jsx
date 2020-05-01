import React, { Component, createRef } from 'react';

import { ITEMS } from '../store.js';

import '../spiderCatStyle.sass';
import './gameScreen.sass';

import ScoreTable from '../components/ScoreTable';
import Canvas from '../components/Canvas';

class gameScreen extends Component {
  constructor() {
    super();
    this.wrapper = createRef();
  }

  changeScore = (item) => {
    const { changeScoreAction, score } = this.props;
    const newScore = score + item.influence;
    if (newScore < 0) {
      changeScoreAction({
        score: newScore,
        currScreenName: 'finalScreen',
      });
    } else {
      changeScoreAction({
        score: newScore,
      });
    }
  };

  render() {
    const { score, height, width } = this.props;
    return (
      <div className="spider-cat-game-screen" ref={this.wrapper}>
        <div className="spider-cat-wrapper flex-container flex-container--wrap">
          <ScoreTable score={score} />
        </div>

        <Canvas height={height} width={width} />
      </div>
    );
  }
}

export default gameScreen;
