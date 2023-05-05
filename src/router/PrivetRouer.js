import React, { useContext } from 'react';
import { AuthProvider } from '../contexts/authContext/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouer = ({children}) => {
    const {user,loader} = useContext(AuthProvider)
    const location = useLocation();
    if(loader){
        return <button className=" loading"></button>
    }
    if(user && user.uid){
        return children;
    }
    else{
        return <Navigate state={{from:location}} replace to={'/login'}></Navigate>
    }

};

export default PrivetRouer;