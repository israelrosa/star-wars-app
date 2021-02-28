import Planets from '../../interfaces/Planets';

export const ADD_PLANETS_HISTORY = 'ADD_PLANETS_HISTORY';
export const SHOW_ALL_PLANETS = 'SHOW_ALL_PLANETS';

export interface PlanetHistoryState {
  planets: Planets[];
}

interface AddPlanetHistoryAction {
  type: typeof ADD_PLANETS_HISTORY;
  planet: Planets;
}

export type PlanetHistoryActions = AddPlanetHistoryAction;
