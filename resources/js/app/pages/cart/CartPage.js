import React, { useCallback, useMemo } from 'react'
import { Container, Row, Col } from './CartPage.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

    const totalNetto = useMemo(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += (item.price * item.qty)
        })
        return sum
    }, [cart])

    const totalBrutto = useMemo(() => {
        return (totalNetto + (totalNetto * .23)).toFixed(2)
    }, [totalNetto])

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
                    <table className='summary'>
                        <tbody>
                            <tr>
                                <td>Total price netto:</td>
                                <td>${totalNetto}</td>
                            </tr>
                            <tr>
                                <td>Tax:</td>
                                <td>23%</td>
                            </tr>
                            <tr>
                                <td>Total price brutto:</td>
                                <td>${totalBrutto}</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Link to='/order'><button className='btn btn-primary'>Go to Order</button></Link>
            </Row>

        </Container>

    );
}

export default connect(state => ({
    cart: state.shop.cart
}), { removeFromCart })(CartPage);