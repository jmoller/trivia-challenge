import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mount it on the Store
const store = createStore(
  combineReducers({...reducer}),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application
export default store;