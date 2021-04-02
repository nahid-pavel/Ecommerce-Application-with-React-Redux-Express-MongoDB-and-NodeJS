import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Login from './auth/login/Login';
import SignUp from './auth/signUp/SignUp';


export default function AuthPage() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>

        </Router>


    )
}
