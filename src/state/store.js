import { createStore } from 'redux';
import reducerIndex from './reducers/reducerIndex';

let store = createStore(reducerIndex);

export default store;