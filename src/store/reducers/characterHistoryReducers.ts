import {
  ADD_CHARACTER_HISTORY,
  CharacterHistoryActions,
  CharacterHistoryState,
} from '../types/characterTypes';

const initialState: CharacterHistoryState = {
  characters: [],
};

export default function historyReducers(
  state = initialState,
  action: CharacterHistoryActions,
): CharacterHistoryState {
  switch (action.type) {
    case ADD_CHARACTER_HISTORY:
      if (
        state.characters.findIndex(
          (ch) => ch.name === action.character.name,
        ) === -1
      ) {
        return {
          characters: [...state.characters, action.character],
        };
      }
      return state;

    default:
      return state;
  }
}
