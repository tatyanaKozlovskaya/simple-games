import {
  CHANGE_SCORE,
  RESTART,
  ADD_ITEM_TO_BASKET,
  CHANGE_CURRENT_SCREEN,
} from './spiderCatConstants';

export const changeScoreAction = ({ score, currScreenName }) => {
  return {
    type: CHANGE_SCORE,
    payload: { score: score, currScreenName: currScreenName },
  };
};

export const addItemToBasketAction = (item) => {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: item,
  };
};

export const changeCurrentScreenAction = ({ currScreenName }) => {
  return {
    type: CHANGE_CURRENT_SCREEN,
    payload: currScreenName,
  };
};

export const restartAction = () => {
  return {
    type: RESTART,
  };
};
