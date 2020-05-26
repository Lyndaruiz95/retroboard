import React from 'react';
import './pageHeader.css'
import logo from '../assets/logo_white.png';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const PageHeader = (props) => {

  console.log('home', props)

  return (
    <div className="header">
      <div>

        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} className="header-logo">
            <Link to='/'> 
              <img src={logo}  className="logo" alt="logo" />
            </Link>
          </Grid>
        </Grid>


      </div>


      <Divider variant="middle" className="header-divider" />
      

    </div>
  )
}


export default PageHeader
