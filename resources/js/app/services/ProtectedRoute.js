import React from 'react';
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

const protectedRoute = ({ isLogged, children }) => {
    if (!isLogged) {
        return <Navigate to="/user-login" replace />;
    } else {

        return children;
    }
};

export default connect(state => ({ isLogged: state.auth.isLogged }))(protectedRoute)