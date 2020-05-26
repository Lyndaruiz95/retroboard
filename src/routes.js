import React from 'react';
import { Route } from 'react-router-dom'


// Import all comonents
import App from './App'
import CreateRetroBoard from './createRetroBoard/createRetroBoard'
import Home from './homePage/home';


/**
 * Q: can we import all of these routes to keep them in one place? 
 */

export default (
  <Route exact={true} path="/" component={Home}>
    <Route path="/createretroboard" component={CreateRetroBoard} />
  </Route>
);