import Species from '../../interfaces/Species';

export const ADD_SPECIE_HISTORY = 'ADD_SPECIE_HISTORY';
export const SHOW_ALL_SPECIE = 'SHOW_ALL_SPECIE';

export interface SpecieHistoryState {
  species: Species[];
}

interface AddSpecieHistoryAction {
  type: typeof ADD_SPECIE_HISTORY;
  specie: Species;
}

export type SpecieHistoryActions = AddSpecieHistoryAction;
