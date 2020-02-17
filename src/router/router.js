// Modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from 'containers/Home/Home';
import Header from 'containers/Header/Header';
import NotFound from 'containers/NotFound/NotFound';

function Routers() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Header' component={Header} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    );
}

export default Routers;
