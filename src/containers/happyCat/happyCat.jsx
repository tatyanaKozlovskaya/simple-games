import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FullHeightWrapper from './../../components/FullHeightWrapper';

import './happyCatStyle.sass';

import StartScreen from './partials/startScreen';
import GameScreen from './partials/gameScreen';
import FinalScreen from './partials/finalScreen';

import {
  changeScoreAction,
  addItemToBasketAction,
  changeCurrentScreenAction,
  restartAction,
} from './happyCatActions';

const SCREENS = {
  startScreen: {
    name: 'startScreen',
    element: <StartScreen />,
  },
  gameScreen: {
    name: 'gameScreen',
    element: <GameScreen />,
  },
  finalScreen: {
    name: 'finalScreen',
    element: <FinalScreen />,
  },
};

class HappyCat extends Component {
  render() {
    const {
      currScreenName,
      score,
      basket,
      changeScoreAction,
      addItemToBasketAction,
      changeCurrentScreenAction,
      restartAction,
    } = this.props;

    return currScreenName ? (
      <FullHeightWrapper cn="happy-cat">
        {React.cloneElement(SCREENS[currScreenName].element, {
          currScreenName,
          score,
          basket,
          changeScoreAction,
          addItemToBasketAction,
          changeCurrentScreenAction,
          restartAction,
        })}
      </FullHeightWrapper>
    ) : (
      <FullHeightWrapper>Loading...</FullHeightWrapper>
    );
  }
}

const mapStateToProps = ({ currScreenName, score, basket }) => {
  return {
    currScreenName,
    score,
    basket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeScoreAction: (score) => {
      dispatch(changeScoreAction(score));
    },
    addItemToBasketAction: (item) => {
      dispatch(addItemToBasketAction(item));
    },
    changeCurrentScreenAction: (screen) => {
      dispatch(changeCurrentScreenAction(screen));
    },
    restartAction: () => {
      dispatch(restartAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HappyCat);

HappyCat.displayName = 'HappyCat';

HappyCat.defaultProps = {
  currentScreen: 'startScreen',
};

HappyCat.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      influence: PropTypes.number.isRequired,
    }),
  ).isRequired,
  score: PropTypes.number.isRequired,
  currScreenName: PropTypes.string.isRequired,
};
