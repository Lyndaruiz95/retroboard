import React from 'react';
import logo from '../assets/logo_white.png';
import Retroboard from '../retroboard/retroboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Home = (props) => {

  console.log('home', props)

  return (
    <div> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <button>
          <Link to='/r'> Create Retroboard</Link>
        </button>

      

    </div>
  )
}


export default Home
