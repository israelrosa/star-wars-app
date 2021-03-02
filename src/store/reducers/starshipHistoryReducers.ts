import {
  ADD_STARSHIP_HISTORY,
  StarshipHistoryActions,
  StarshipHistoryState,
} from '../types/starshipTypes';

const initialState: StarshipHistoryState = {
  starships: [],
};

export default function historyReducers(
  state = initialState,
  action: StarshipHistoryActions,
): StarshipHistoryState {
  switch (action.type) {
    case ADD_STARSHIP_HISTORY:
      if (
        state.starships.findIndex(
          (ssp) => ssp.name === action.starship.name,
        ) === -1
      ) {
        return {
          starships: [...state.starships, action.starship],
        };
      }
      return state;

    default:
      return state;
  }
}
