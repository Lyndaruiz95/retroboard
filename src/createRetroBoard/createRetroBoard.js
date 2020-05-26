import React from 'react';
import './createRetroBoard.css';
import { 
  Button
} from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const CreateRetroBoard = (props) => {



  return (
    <Link to='/r'> 
      <button className="">
        create retroboard
      </button>
    </Link>
  )
}


export default CreateRetroBoard