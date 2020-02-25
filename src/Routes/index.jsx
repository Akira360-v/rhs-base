import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from '../routes';

const Routes = props => {
    return (
        <Switch>
            {routes.map((route,index)=> <Route key={index} {...route.route} />)}
        </Switch>
            
    );
};

export default Routes;
