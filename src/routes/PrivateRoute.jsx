import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    // return <N
};

export default PrivateRoute;