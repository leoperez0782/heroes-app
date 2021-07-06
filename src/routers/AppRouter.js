import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../login/LoginScreen';
import { DashBoardRouter } from './DashBoardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    return (
        <Router>
           

            <div>
                <Switch>
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={LoginScreen}
                    isAuthenticated={user.logged} />
                    {/* <Route exact path="/login" component={LoginScreen} /> */}
                    
                    <PrivateRoute path="/" 
                    component={ DashBoardRouter } 
                    isAuthenticated = {user.logged}/>
                </Switch>
            </div>


        </Router>
    );
}
