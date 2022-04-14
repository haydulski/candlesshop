import { combineReducers } from 'redux'
import productsState from './productsReducer'
import auth from './authReducer'

export default combineReducers({ productsState, auth })