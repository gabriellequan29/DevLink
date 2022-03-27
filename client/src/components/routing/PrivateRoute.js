import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = () => {
 
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);

  if(!authenticated && !loading) {
      return <Navigate to='/login' />
  }
  return <Outlet /> 
};

export default PrivateRoute;
