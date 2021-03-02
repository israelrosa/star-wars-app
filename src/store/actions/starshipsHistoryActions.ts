import Starships from '../../interfaces/Starships';
import {
  StarshipHistoryActions,
  ADD_STARSHIP_HISTORY,
} from '../types/starshipTypes';

export function AddCharacterHistoryAction({
  films,
  name,
  url,
  consumables,
  cost_in_credits,
  crew,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  passengers,
  pilots,
  cargo_capacity,
  MGLT,
  hyperdrive_rating,
  starship_class,
}: Starships): StarshipHistoryActions {
  return {
    type: ADD_STARSHIP_HISTORY,
    starship: {
      MGLT,
      starship_class,
      hyperdrive_rating,
      cargo_capacity,
      pilots,
      passengers,
      model,
      max_atmosphering_speed,
      manufacturer,
      length,
      crew,
      cost_in_credits,
      consumables,
      url,
      name,
      films,
    },
  };
}
