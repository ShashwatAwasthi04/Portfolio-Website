import React from 'react';
import { Switch } from 'react-router-dom';
import Landing from './landing';

const Main = () => {
    <Switch>
        <Route exact path="/" component={Landing} />
    </Switch>
}