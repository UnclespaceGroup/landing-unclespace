import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducers = {
  form: formReducer
}

const reducer = combineReducers(reducers)

const store = createStore(reducer, applyMiddleware(thunk))

export default store