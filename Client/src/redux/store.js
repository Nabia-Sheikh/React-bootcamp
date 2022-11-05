import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from './reducer/todoReducer';

const reducer = combineReducers({
   todo: todoReducer,
});

const Middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...Middleware))
)

export default store;