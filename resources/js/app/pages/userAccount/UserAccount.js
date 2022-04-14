import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import apiClient from '../../services/axios';
import { setUser, logoutUser } from '../../redux/actions/authActions'
import { Container, Column } from './UserAccount.css'
import { useNavigate } from 'react-router-dom'

function UserAccount({ user, setUser, logoutUser }) {

    const navigate = useNavigate()

    const getDetails = () => {
        apiClient.get('/user').then(response => {
            setUser(response.data)
        }).catch((err) => {
            history.push('/user-login')
        });
    }
    const logoutAction = () => {

        logoutUser()
        navigate('/user-login', { replace: true })
    }

    useEffect(() => {
        if (user.length === 0) {
            console.log('work');
            getDetails()
        }
    }, [setUser])

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
}), { setUser, logoutUser })(UserAccount);