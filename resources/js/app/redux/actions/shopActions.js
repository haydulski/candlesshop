import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, ORDER } from "../../enums/shop"
import { toast } from 'react-toastify'
import apiClient from "../../services/axios"

const notify = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
});

export const setCart = (cartData = []) => (dispatch) => {
    const localCart = JSON.parse(cartData);
    //load persisted cart into state if it exists
    if (localCart) {
        let cartQty = 0
        localCart.forEach(element => {
            cartQty += element.qty
        });
        dispatch({ type: SET_CART.SET_CART_REQUEST })
        try {
            dispatch({
                type: SET_CART.SET_CART_SUCCESS,
                payload: {
                    cart: localCart,
                    qty: cartQty
                }
            })
        } catch (error) {
            dispatch({ type: SET_CART.SET_CART_FAILURE })
        }
    }

}
export const addProductToCart = (cart, item = {}) => (dispatch) => {
    //load persisted cart into state if it exists
    if (cart) {
        let cartQty = 0


        let { id } = item;

        let existingItem = cart.find(cartItem => cartItem.id == id);

        if (existingItem) {
            existingItem.qty += item.qty
        } else {
            cart.push(item)
        }

        let stringCart = JSON.stringify(cart);

        cart.forEach(el => {
            cartQty += el.qty
        })

        dispatch({ type: ADD_PRODUCT.ADD_PRODUCT_REQUEST })
        try {
            localStorage.setItem("cart", stringCart)
            dispatch({
                type: ADD_PRODUCT.ADD_PRODUCT_SUCCESS,
                payload: {
                    cart: cart,
                    qty: cartQty
                }
            })
            notify('Product was added')

        } catch (error) {
            dispatch({ type: ADD_PRODUCT.ADD_PRODUCT_FAILURE })
        }
    }

}
export const removeFromCart = (cart, id) => (dispatch) => {
    //load persisted cart into state if it exists
    if (cart) {
        let cartQty = 0


        let newCart = cart.filter(cartItem => cartItem.id !== id);

        let stringCart = JSON.stringify(newCart);

        newCart.forEach(el => {
            cartQty += el.qty
        })

        dispatch({ type: REMOVE_PRODUCT.REMOVE_PRODUCT_REQUEST })
        try {
            localStorage.setItem("cart", stringCart)
            dispatch({
                type: REMOVE_PRODUCT.REMOVE_PRODUCT_SUCCESS,
                payload: {
                    cart: newCart,
                    qty: cartQty
                }
            })
            notify('Product deleted from cart')

        } catch (error) {
            dispatch({ type: REMOVE_PRODUCT.REMOVE_PRODUCT_FAILURE })
        }
    }

}
export const placeOrder = (orderData) => (dispatch) => {

    apiClient.post('/new-order', {
        order_data: JSON.stringify(orderData)

    }).then(res => {
        console.log(res.data)
        dispatch({
            type: ORDER.PLACE_ORDER_SUCCESS
        })
        notify('Order was placed, soon you should get confirmation email')
    }
    ).catch((err) => {
        console.log(err.response.data);
        dispatch({
            type: ORDER.PLACE_ORDER_FAILURE
        })
    })


}