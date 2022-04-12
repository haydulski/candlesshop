import { PRODUCTS_LOAD_REQUEST, PRODUCTS_LOAD_SUCCESS, PRODUCTS_LOAD_FAILURE } from '../enums/products'
import { LOADING_STATES } from '../enums/loadingStates'
const intialState = {
    products: [],
    loading: LOADING_STATES.INITIAL
}

export default function productsState(state = intialState, action) {
    switch (action.type) {
        case PRODUCTS_LOAD_REQUEST:
            return {
                ...state,
                loading: LOADING_STATES.LOADING
            }
        case PRODUCTS_LOAD_SUCCESS:
            return {
                ...state,
                loading: LOADING_STATES.LOADED,
                products: action.payload
            }
        case PRODUCTS_LOAD_FAILURE:
            return {
                ...state,
                loading: LOADING_STATES.FAILED
            }

        default:
            return state;
    }
}