import React, { useState } from 'react';
import './App.css';

import Home from './homePage/home'
import {Retroboard, Retro} from './retroboard/retroboard'

// routes
import { Switch, Route } from "react-router-dom";




class Appp extends React.Component { 
   // initalize state here for rendering
   // Don't need state if using hooks
   constructor(props){
    super(props)
    this.state = { 
      selectedUser: null,
      data: 'HELLO'
    }
  }

  // Q: when do we need to initialize our api?

  render()
  {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <Home/>
          </Route>
          <Route path="/r/:id">
            <Retro/>
          </Route>  
          <Route path="/r">
            <Retro/>
            {/* <Retroboard/> */}
          </Route> 
        </Switch>

      </div>
    )
  }
}

const App = () => {
  return(
    <div className="App">
      <Switch>
        <Route exact={true} path="/">
          <Home/>
        </Route>
        <Route path="/r/:id">
          <Retro/>
        </Route>  
        <Route path="/r">
          <Retro/>
          {/* <Retroboard/> */}
        </Route> 
      </Switch>
    </div>
  )

}

export default App;
