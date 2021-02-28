import Characters from '../../interfaces/Characters';

export const ADD_CHARACTER_HISTORY = 'ADD_CHARACTER_HISTORY';
export const SHOW_ALL_CHARACTER = 'SHOW_ALL_CHARACTER';

export interface CharacterHistoryState {
  characters: Characters[];
}

interface AddCharacterHistoryAction {
  type: typeof ADD_CHARACTER_HISTORY;
  character: Characters;
}

export type CharacterHistoryActions = AddCharacterHistoryAction;
