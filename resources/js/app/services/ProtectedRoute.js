import React from 'react';
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

const protectedRoute = ({ isLogged, children }) => {
    if (localStorage.userId && localStorage.userId.length > 0) {
        console.log('work login');
        return children;
    }
    else if (!isLogged) {
        return <Navigate to="/user-login" replace />;
    } else {

        return children;
    }
};

export default connect(state => ({ isLogged: state.auth.isLogged }))(protectedRoute)