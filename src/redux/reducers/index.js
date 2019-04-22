import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import game from './game'

const appReducer = combineReducers({
  form,
  game
})

export default (state, action) => appReducer(state, action)
