import { AUTH_STATE, IS_LOGGED, USER_LOAD, USER_LOGOUT } from '../enums/auth'

const intialState = {
    user: [],
    isLogged: IS_LOGGED.FALSE,
    loading: null
}

export default function auth(state = intialState, action) {
    switch (action.type) {
        case USER_LOAD.USER_LOAD_REQUEST:
            return {
                ...state,
                loading: AUTH_STATE.LOADING
            }
        case USER_LOAD.USER_LOAD_SUCCESS:
            localStorage.setItem('userId', action.payload.id)
            return {
                ...state,
                loading: AUTH_STATE.SUCCES,
                isLogged: IS_LOGGED.TRUE,
                user: action.payload
            }
        case USER_LOAD.USER_LOAD_FAILURE:
            return {
                ...state,
                isLogged: IS_LOGGED.FALSE,
                loading: AUTH_STATE.FAILURE
            }
        case USER_LOGOUT.USER_LOGOUT_SUCCESS:
            localStorage.removeItem('userId')
            return {
                ...state,
                isLogged: IS_LOGGED.FALSE,
                user: [],
                loading: null
            }
        case USER_LOGOUT.USER_LOGOUT_FAILURE:
            return {
                ...state,
                isLogged: IS_LOGGED.TRUE,
            }

        default:
            return state;
    }
}