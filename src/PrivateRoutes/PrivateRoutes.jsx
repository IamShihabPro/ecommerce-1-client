import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace ></Navigate>
};

export default PrivateRoutes;