import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  // Add reducers here
});

const Middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...Middleware))
)

export default store;