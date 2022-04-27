import React from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/authActions'
import { Container, Column } from './UserAccount.css'
import { useNavigate } from 'react-router-dom'

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
            </Column>
        </Container>
    )
}

export default connect(state => ({
    user: state.auth.user,
}), { logoutUser })(UserAccount);