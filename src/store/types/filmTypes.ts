import Films from '../../interfaces/Films';

export const ADD_FILM_HISTORY = 'ADD_FILM_HISTORY';
export const SHOW_ALL_FILM = 'SHOW_ALL_FILM';

export interface FilmHistoryState {
  films: Films[];
}

interface AddFilmHistoryAction {
  type: typeof ADD_FILM_HISTORY;
  film: Films;
}

export type FilmHistoryActions = AddFilmHistoryAction;
