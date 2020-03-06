// Modules
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Containers
import Home from 'containers/Home/Home';
import Cadastro from 'containers/Cadastro/Cadastro';
import NotFound from 'containers/NotFound/NotFound';

function Routers() {
    return (
        <Switch>
            <Redirect exact path='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Redirect exact path='/cadastro' to='/cadastro/step1' />
            <Route exact path='/cadastro/:step' component={Cadastro} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    );
}

export default Routers;
