import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './Common';
import ErrorPage from '../ErrorPage';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={!getToken() ? <Component /> : <Navigate to={ErrorPage}/>}
    />
  );
}

export default PublicRoute;
