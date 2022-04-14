import { USER_LOAD, USER_LOGOUT } from '../../enums/auth'
import axios from 'axios'

export const setUser = (data) => (dispatch) => {
    dispatch({ type: USER_LOAD.USER_LOAD_REQUEST })

    try {
        dispatch({
            type: USER_LOAD.USER_LOAD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: USER_LOAD.USER_LOAD_FAILURE })
    }

}

export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem('userId')
    try {

        await axios.post('/logout');
        dispatch({ type: USER_LOGOUT.USER_LOGOUT_SUCCESS })

    } catch (error) {
        dispatch({ type: USER_LOGOUT.USER_LOGOUT_FAILURE })
    }
}