import React, { useState, useEffect } from 'react';
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

import { InitializeFirebase, createNewBoard } from '../firebase/init-firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import * as firebase from "firebase/app";
import { func } from 'prop-types';

let clicked = false


export function CreateRetroBoard (props) {
  let boardId = Math.floor(Math.random() * Math.floor(10000000)).toString()
  let path = 'r/' + boardId.toString()

  console.log(firebase)


  // const [path, setPath] = useState(null)

  // Q: How to useEffect to update link after each click
  useEffect(()=>{
    boardId = Math.floor(Math.random() * Math.floor(10000000)).toString()
  })



  return (
    <Link to={path}> 
      <button className="" onClick={createBoard(boardId)}>
        create new retroboard
      </button>
    </Link>
  )
}

function createBoard (boardId) {
  //InitializeFirebase()
  createNewBoard(boardId)
}



export default CreateRetroBoard;