import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { setUser } from '../redux/actions/authActions'
import apiClient from './axios';

const protectedRoute = ({ isLogged, children, setUser }) => {

    useEffect(() => {
        if (!isLogged) {
            apiClient.get('/user').then(response => {
                setUser(response.data)
            }).catch((err) => {

            })
        }
    }, [setUser])

    if (!isLogged) {
        return <Navigate to="/user-login" replace />;
    } else {

        return children;
    }
};

export default connect(state => ({ isLogged: state.auth.isLogged }), { setUser })(protectedRoute)