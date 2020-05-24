import React, { useState } from 'react';
import './App.css';

import Home from './homePage/home'
import {Retroboard, Retro} from './retroboard/retroboard'

// routes
import { Switch, Route } from "react-router-dom";


// import firebase
//import * as firebase from "firebase/app";
//import { firebaseConfig } from '../app-config'



class App extends React.Component { 
   // initalize state here for rendering
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
    //console.log('retro', Retro())
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <Home/>
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

export default App;
