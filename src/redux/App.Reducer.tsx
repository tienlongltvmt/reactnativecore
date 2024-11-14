import {combineReducers} from 'redux';
import LocationReducer from './reducer/Location.Reducer';
import MusicReducer from './reducer/Music.Reducer';

export const AllReducers = combineReducers({
  MusicReducer,
  LocationReducer,
});

export type RootState = ReturnType<typeof AllReducers>;
