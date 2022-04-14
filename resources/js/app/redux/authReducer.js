import { AUTH_STATE, IS_LOGGED, USER_LOAD } from '../enums/auth'

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
            return {
                ...state,
                loading: AUTH_STATE.SUCCES,
                products: action.payload
            }
        case USER_LOAD.USER_LOAD_FAILURE:
            return {
                ...state,
                loading: AUTH_STATE.FAILURE
            }

        default:
            return state;
    }
}