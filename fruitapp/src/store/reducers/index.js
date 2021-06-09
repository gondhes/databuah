import { combineReducers } from 'redux'
import fruits from './fruitsReducer'
import fruit from './fruitReducer'

const reducer = combineReducers({
  fruits,
  fruit
})

export default reducer