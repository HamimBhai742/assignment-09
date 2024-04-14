import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loder } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loder) {
        return <div className='flex justify-center min-h-screen items-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRouter;