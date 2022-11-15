import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from './Reducer/Index';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export { Store };
