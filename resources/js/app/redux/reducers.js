import { combineReducers } from 'redux'
import productsState from './productsReducer'
import auth from './authReducer'
import shop from './shopReducer'

export default combineReducers({ productsState, auth, shop })