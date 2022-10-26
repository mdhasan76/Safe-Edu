import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authContext/AuthProvider'

const PrivateRoute = ({ childern }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ form: location }} replace></Navigate>
    }
    return childern;
};

export default PrivateRoute;