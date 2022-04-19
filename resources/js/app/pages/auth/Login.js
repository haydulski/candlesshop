import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormSection, Form, Input } from './Login.css'
import { setUser } from '../../redux/actions/authActions'

function Login({ isLogged, setUser }) {

    axios.defaults.withCredentials = true;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();
    const handleLogin = () => {
        axios.get('/sanctum/csrf-cookie').then(response => { })

        const user1 = {
            email: email,
            password: password
        }
        axios.post('/login', user1).then(response => {
            axios.get('/api/v1/user').then(response => {
                setUser(response.data)
                history('/my-account', { replace: true })
            }).catch((err) => {
                history('/user-login', { replace: true })
            });
        }).catch((err) => {
            setEmail('')
            setPassword('')
            console.log(err);
        })
    }
    return isLogged ?
        <Navigate to='/my-account' replace />
        : (
            <FormSection>
                <Form>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' />
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <Input type="submit" value='Log in' onClick={handleLogin} />
                </Form>
            </FormSection>
        );
}

export default connect(state => (
    {
        isLogged: state.auth.isLogged
    }
), { setUser })(Login);