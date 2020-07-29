import { firebaseConfig } from '../app-config';
import * as firebase from "firebase/app";

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';



export function InitializeFirebase() {
    return firebase.initializeApp(firebaseConfig);
}


export function createNewBoard(boardId) {
  console.log('createdd')
  try{
    firebase.initializeApp(firebaseConfig);
  }catch(err){
    firebase.database().ref('id/' + boardId).set({
      instanceId: boardId,
      createdDate: new Date().toUTCString()
    })
    console.log('whatsup?')
  }

  

}