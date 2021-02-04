import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favouritesReducer from '../reducers/favourites'
import resultsReducer from '../reducers/results'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  favourites: {
    jobs: [],
    error: '',
  },
  results:{
    items:[],
  }
};

const bigReducer = combineReducers({favourites: favouritesReducer, results: resultsReducer, })
// every sub-reducer is triggered at ANY action dispatching

export default function configureStore() {
  return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
}
