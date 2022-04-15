import React, { useCallback } from 'react'
import { Container, Row, Col } from './CartPage.css'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/actions/shopActions'

function CartPage({ cart, removeFromCart }) {

    const handleRemove = (id) => {
        removeFromCart(cart, id)
    }
    const CartItems = useCallback(() => cart.map(item => {
        return (
            <tr key={item.id}>
                <td><img src={'/storage/' + item.photo} alt="product picture" /></td>
                <td><h3>{item.title}</h3></td>
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>${item.qty * item.price}</td>
                <td><button onClick={() => handleRemove(item.id)}>x</button></td>
            </tr>
        )
    }), [cart])

    return (
        <Container>
            <h1>Your cart</h1>
            <Row>
                <Col>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Remove item</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItems />
                        </tbody>
                    </table>
                </Col>
            </Row>

        </Container>

    );
}

export default connect(state => ({
    cart: state.shop.cart
}), { removeFromCart })(CartPage);