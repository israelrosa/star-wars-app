import { combineReducers } from 'redux';
import planets from './planetHistoryReducers';
import characters from './characterHistoryReducers';
import species from './specieHistoryReducers';
import films from './filmHistoryReducers';
import starships from './starshipHistoryReducers';
import vehicles from './vehicleHistoryReducers';

const root = combineReducers({
  planets,
  characters,
  species,
  films,
  starships,
  vehicles,
});

export default root;
