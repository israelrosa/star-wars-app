import { combineReducers } from 'redux';
import planets from './planetHistoryReducers';
import characters from './characterHistoryReducers';

const root = combineReducers({
  planets,
  characters,
});

export default root;
