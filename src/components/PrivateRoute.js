import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div class="flex justify-center items-center">
                <div
                    class="
                        animate-spin
                        rounded-full
                        h-16
                        w-16
                        border-t-4 border-b-4 border-purple-800
                        "
                ></div>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            >
            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;