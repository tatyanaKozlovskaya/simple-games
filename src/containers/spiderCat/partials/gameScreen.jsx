import React, { Component } from 'react';

import { ITEMS } from '../store.js';

import '../spiderCatStyle.sass';
import './gameScreen.sass';

import ScoreTable from '../components/ScoreTable';

class gameScreen extends Component {
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
    const { score } = this.props;
    return (
      <div className="spider-cat-game-screen">
        <div className="spider-cat-wrapper flex-container flex-container--wrap">
          <ScoreTable score={score} />
        </div>
        <div className="spider-cat-wrapper flex-container flex-container--wrap">
          {Object.values(ITEMS).map((item) => (
            <div
              className="game-item"
              key={item.name}
              onClick={() => this.changeScore(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default gameScreen;
