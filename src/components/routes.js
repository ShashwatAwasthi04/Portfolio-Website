import React from 'react';

import {Switch,Route} from 'react-router-dom';
import Landing from './landing';
import myResume from './myresume';
import projects from './projects';
import intro from './intro';
import Contact from './contactme';

const routes = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" component={myResume} />
        <Route path="/projects" component={projects} />
        <Route path="/intro" component={intro} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default routes;