import { createStore, combineReducers } from 'redux';
import { greetReducer } from './greeting';

const reducers = combineReducers({
  greetReducer,
});

const store = createStore(reducers);

export default store;
