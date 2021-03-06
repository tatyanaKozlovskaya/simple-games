import {
  CHANGE_SCORE,
  RESTART,
  ADD_ITEM_TO_BASKET,
  CHANGE_CURRENT_SCREEN,
} from './spiderCatConstants';

const initialState = {
  currScreenName: 'gameScreen',
  score: 0,
  basket: [],
};

export default function spiderCatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCORE: {
      const { score, currScreenName } = action.payload;
      
      return {
        ...state,
        score: score,
        ...(currScreenName && { currScreenName: currScreenName }),
      };
    }

    case CHANGE_CURRENT_SCREEN:
      return { ...state, currScreenName: action.payload };

    case ADD_ITEM_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };

    case RESTART:
      return { ...initialState };

    default:
      return state;
  }
}
