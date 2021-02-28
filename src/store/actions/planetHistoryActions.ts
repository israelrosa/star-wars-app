import Planets from '../../interfaces/Planets';
import {
  ADD_PLANETS_HISTORY,
  PlanetHistoryActions,
} from '../types/planetTypes';

export function AddPlanetHistoryAction({
  films,
  name,
  url,
  population,
  climate,
  diameter,
  gravity,
  orbital_period,
  residents,
  rotation_period,
  surface_water,
  terrain,
}: Planets): PlanetHistoryActions {
  return {
    type: ADD_PLANETS_HISTORY,
    planet: {
      climate,
      terrain,
      surface_water,
      rotation_period,
      residents,
      orbital_period,
      gravity,
      diameter,
      population,
      url,
      name,
      films,
    },
  };
}
