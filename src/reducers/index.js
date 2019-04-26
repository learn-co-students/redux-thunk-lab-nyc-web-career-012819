import { combineReducers } from 'redux';
import catReducer from './cats_reducer';

export const rootReducer = combineReducers({
  cats: catReducer,
});