import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, ORDER } from '../enums/shop'

const initialState = {
    cart: [],
    cartQty: 0,
    cartLoading: 'no',
    updates: 'no'
}
export default function shop(state = initialState, action) {
    switch (action.type) {
        case SET_CART.SET_CART_REQUEST:
            return {
                ...state,
                cartLoading: 'loading'
            }
        case SET_CART.SET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                cartQty: action.payload.qty,
                cartLoading: 'loaded'
            }
        case SET_CART.SET_CART_FAILURE:
            return {
                ...state,
                cartLoading: 'failed'
            }
        case ADD_PRODUCT.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                updates: 'updating'
            }
        case ADD_PRODUCT.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                cartQty: action.payload.qty,
                updates: 'updated'
            }
        case ADD_PRODUCT.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                updates: 'failed'
            }
        case REMOVE_PRODUCT.REMOVE_PRODUCT_REQUEST:
            return {
                ...state,
                updates: 'updating'
            }
        case REMOVE_PRODUCT.REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                cartQty: action.payload.qty,
                updates: 'updated'
            }
        case REMOVE_PRODUCT.REMOVE_PRODUCT_FAILURE:
            return {
                ...state,
                updates: 'failed'
            }
        case ORDER.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                cart: [],
                cartQty: 0,
                cartLoading: 'no',
            }

        default:
            return state;
    }
}