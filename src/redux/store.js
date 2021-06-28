import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import { bulbState } from './reducers'

//STORE --> GLOBALIZED STATE
const rootReducer = combineReducers({
  bulbState: bulbState
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store