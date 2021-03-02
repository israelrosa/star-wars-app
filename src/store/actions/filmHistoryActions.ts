import Films from '../../interfaces/Films';
import { FilmHistoryActions, ADD_FILM_HISTORY } from '../types/filmTypes';

export function AddCharacterHistoryAction({
  characters,
  director,
  episode_id,
  opening_crawl,
  planets,
  producer,
  release_date,
  species,
  starships,
  title,
  url,
  vehicles,
}: Films): FilmHistoryActions {
  return {
    type: ADD_FILM_HISTORY,
    film: {
      characters,
      vehicles,
      url,
      title,
      starships,
      species,
      release_date,
      producer,
      planets,
      opening_crawl,
      episode_id,
      director,
    },
  };
}
