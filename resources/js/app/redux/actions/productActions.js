import { PRODUCTS_LOAD_FAILURE, PRODUCTS_LOAD_REQUEST, PRODUCTS_LOAD_SUCCESS } from "../../enums/products"
import apiClient from "../../services/axios"

export const fetchProductsAction = () => async (dispatch) => {
    dispatch(
        { type: PRODUCTS_LOAD_REQUEST })
    try {
        const response = await apiClient.get('/products')

        dispatch(
            {
                type: PRODUCTS_LOAD_SUCCESS,
                payload: response.data,
            }

        )
    } catch (error) {
        dispatch(
            {
                type: PRODUCTS_LOAD_FAILURE,
            }

        )
    }


}