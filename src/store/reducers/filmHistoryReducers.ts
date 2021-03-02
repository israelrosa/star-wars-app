import {
  ADD_FILM_HISTORY,
  FilmHistoryActions,
  FilmHistoryState,
} from '../types/filmTypes';

const initialState: FilmHistoryState = {
  films: [],
};

export default function historyReducers(
  state = initialState,
  action: FilmHistoryActions,
): FilmHistoryState {
  switch (action.type) {
    case ADD_FILM_HISTORY:
      if (
        state.films.findIndex((flm) => flm.title === action.film.title) === -1
      ) {
        return {
          films: [...state.films, action.film],
        };
      }
      return state;

    default:
      return state;
  }
}
