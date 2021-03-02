import Starships from '../../interfaces/Starships';

export const ADD_STARSHIP_HISTORY = 'ADD_STARSHIP_HISTORY';
export const SHOW_ALL_STARSHIP = 'SHOW_ALL_STARSHIP';

export interface StarshipHistoryState {
  starships: Starships[];
}

interface AddStarshipHistoryAction {
  type: typeof ADD_STARSHIP_HISTORY;
  starship: Starships;
}

export type StarshipHistoryActions = AddStarshipHistoryAction;
