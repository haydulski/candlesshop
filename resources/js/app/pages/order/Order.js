import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Container, Row, Col } from './Order.css'
import { connect } from 'react-redux'
import ClientForm from './ClientForm'
import { Link } from 'react-router-dom'
const LoginMsg = () => {
    return (
        <h4 className='msg-info'>
            Please <Link to="/user-login">login</Link> or place order as guest.
        </h4>
    )
}

function Order({ cart, isLogged, user }) {
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        street: '',
        post: '',
        city: '',
        province: '',
        country: '',
        mess: ''
    })

    const [delivery, setDev] = useState(0);
    const [order, setOrder] = useState(0);
    const [payment, setPayment] = useState(0);

    const OrderItems = useCallback(() => cart.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
            </tr>
        )
    }), [cart])

    const netto = useMemo(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += (item.price * item.qty)
        })
        return sum
    }, [cart])

    const totalBrutto = () => {
        return (netto + (netto * .23)).toFixed(2)
    }

    const handleOrder = (e) => {
        const value = e.target.value
        const totalOrder = parseFloat(totalBrutto()) + parseFloat(value)
        setDev(value)
        setOrder(totalOrder.toFixed(2))
    }

    const handlePlaceorder = () => {
        console.log(data);
    }
    useEffect(() => {
        setOrder(totalBrutto)
    }, [])

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setData({
                ...data,
                name: user.name,
                surname: user.surname,
                email: user.email,
                phone: user.mobile

            })
        }
    }, [user])


    return (
        <Container>
            <h1>Order summary</h1>
            <Row>
                <Col>
                    {!isLogged ? <LoginMsg /> : null}
                    <ClientForm data={data} getter={setData} />
                </Col>
                <Col>
                    <div>
                        <h3>Products:</h3>
                        <table className='short-summary'>
                            <tbody>
                                <OrderItems />
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Delivery:</h3>
                        <input type="radio" id="1" name="delivery" value="10" onClick={(e) => handleOrder(e)} />
                        <label htmlFor="1">DPD delivery - $10</label><br />
                        <input type="radio" id="2" name="delivery" value="0" onClick={(e) => handleOrder(e)} />
                        <label htmlFor="2">On place - free</label>
                    </div>
                    <div>
                        <h3>Payment method:</h3>
                        <input type="radio" id="1" name="payment" onClick={(e) => setPayment(e.target.id)} />
                        <label htmlFor="1">Bank transfer</label><br />
                        <input type="radio" id="2" name="payment" onClick={(e) => setPayment(e.target.id)} />
                        <label htmlFor="2">PayPal</label>
                    </div>
                    <div>
                        <h3>Summary:</h3>
                        <p>Total to pay: <b>${order} brutto</b> (with 23% VAT)</p>
                    </div>
                    <div>
                        <button className="btn" onClick={handlePlaceorder}>Place order</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default connect(state => ({
    cart: state.shop.cart,
    isLogged: state.auth.isLogged,
    user: state.auth.user
})

)(Order);