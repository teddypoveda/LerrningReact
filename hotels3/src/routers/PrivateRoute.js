import React from 'react';
import PropTypes from 'prop-types';

import { Route, Navigate } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    // <Route path="/login" element={ <LoginScreen/> } />
    // <Route path="/dashboard" element={ <Dashboard/> } />
    // <Route path="/hotel" element={ <HotelScreen/> } />
    // <Route path="/country" element={ <CountryScreen/> } />

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Navigate to="/login" /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
