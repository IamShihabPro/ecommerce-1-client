// import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader/Loader';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const  [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    // console.log(location);

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from: location}} to='/' replace ></Navigate>
};

export default AdminRoutes;