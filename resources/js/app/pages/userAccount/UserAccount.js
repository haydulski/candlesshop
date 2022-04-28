import React from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/authActions'
import { Container, Column } from './UserAccount.css'
import { useNavigate } from 'react-router-dom'

const orderStatusName = (id) => {
    switch (id) {
        case 1:
            return 'New';
        case 2:
            return 'Checkout';
        case 3:
            return 'Paid';
        case 4:
            return 'Failed';
        case 5:
            return 'Shipped';
        case 6:
            return 'Delivered';
        case 7:
            return 'Returned';
        case 8:
            return 'Complete';
        default:
            return 'Undefined';
    }
}

function UserAccount({ user, logoutUser }) {

    const navigate = useNavigate()

    const logoutAction = () => {
        logoutUser()
        navigate('/', { replace: true })
    }

    return (
        <Container>
            <Column>
                <h1>My account</h1>
                <h2>{user.name} {user.surname}</h2>
                <p>Mobile: {user.mobile}</p>
                <p>Email: {user.email}</p>
                <p>User id: {user.id}</p>
                <button className='btn btn-secondary' onClick={logoutAction}>Log out</button>
            </Column>
            <Column className='second'>
                <h3>My shoppings:</h3>
                <ul>
                    {user.orders.map((order, key) => {
                        let date = new Date(order['created_at'])
                        return (
                            <li key={key}>{date.toISOString().split('T')[0]} - Order id: {order['id']}, status: {orderStatusName(order['status'])}</li>
                        )
                    })}
                </ul>
            </Column>
        </Container>
    )
}

export default connect(state => ({
    user: state.auth.user,
}), { logoutUser })(UserAccount);