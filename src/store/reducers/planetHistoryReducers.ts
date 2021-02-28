import {
  ADD_PLANETS_HISTORY,
  PlanetHistoryActions,
  PlanetHistoryState,
} from '../types/planetTypes';

const initialState: PlanetHistoryState = {
  planets: [],
};

export default function historyReducers(
  state = initialState,
  action: PlanetHistoryActions,
): PlanetHistoryState {
  switch (action.type) {
    case ADD_PLANETS_HISTORY:
      if (
        state.planets.findIndex((pl) => pl.name === action.planet.name) === -1
      ) {
        return {
          planets: [...state.planets, action.planet],
        };
      }
      return state;

    default:
      return state;
  }
}
