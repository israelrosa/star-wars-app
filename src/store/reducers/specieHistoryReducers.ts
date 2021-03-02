import {
  ADD_SPECIE_HISTORY,
  SpecieHistoryActions,
  SpecieHistoryState,
} from '../types/specieTypes';

const initialState: SpecieHistoryState = {
  species: [],
};

export default function historyReducers(
  state = initialState,
  action: SpecieHistoryActions,
): SpecieHistoryState {
  switch (action.type) {
    case ADD_SPECIE_HISTORY:
      if (
        state.species.findIndex((ch) => ch.name === action.specie.name) === -1
      ) {
        return {
          species: [...state.species, action.specie],
        };
      }
      return state;

    default:
      return state;
  }
}
