import Characters from '../../interfaces/Characters';
import {
  CharacterHistoryActions,
  ADD_CHARACTER_HISTORY,
} from '../types/characterTypes';

export function AddCharacterHistoryAction({
  vehicles,
  birth_year,
  url,
  starships,
  species,
  skin_color,
  name,
  mass,
  homeworld,
  hair_color,
  films,
  eye_color,
  gender,
  height,
}: Characters): CharacterHistoryActions {
  return {
    type: ADD_CHARACTER_HISTORY,
    character: {
      birth_year,
      height,
      gender,
      eye_color,
      films,
      hair_color,
      homeworld,
      mass,
      name,
      skin_color,
      species,
      starships,
      url,
      vehicles,
    },
  };
}
