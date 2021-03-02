import Species from '../../interfaces/Species';
import { SpecieHistoryActions, ADD_SPECIE_HISTORY } from '../types/specieTypes';

export function AddCharacterHistoryAction({
  average_height,
  url,
  skin_colors,
  people,
  name,
  language,
  homeworld,
  hair_colors,
  films,
  eye_colors,
  designation,
  classification,
  average_lifespan,
}: Species): SpecieHistoryActions {
  return {
    type: ADD_SPECIE_HISTORY,
    specie: {
      average_height,
      average_lifespan,
      classification,
      designation,
      eye_colors,
      films,
      hair_colors,
      homeworld,
      language,
      name,
      people,
      skin_colors,
      url,
    },
  };
}
