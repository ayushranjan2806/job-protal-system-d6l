import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './Common';
import Login from '../Pages/Login';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={getToken() ? <Component /> : <Navigate to={Login} />}
    />
  );
}

export default PrivateRoute;
