// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import Auth from '../../Authentication/Auth'
import { Redirect, Route } from 'react-router-dom'

 const PrivateRoute = ({ component: Component, role, ...rest }) => (
    <Route {...rest} render={props => {
        const loggedIn = Auth.isAuthenticated();
        if (!loggedIn) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (Auth.getUserLevel() !== role) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/home'}} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)
export default PrivateRoute;

