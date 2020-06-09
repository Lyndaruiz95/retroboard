import React, { useState, useEffect } from 'react';
import './retroboard.css'
import PageHeader from '../pageHeader/pageHeader';
import { CommentCard } from '../commentCard/commentCard'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import { 
  Button,
  Grid,
  Icon
} from '@material-ui/core'


let retroQuestions = [
  "what went well?",
  "how can we do better?",
  "what is soemthing new we can do?"

]

let retroQ = {
    text: "what went well?",
    icon: "sentiment_very_satisfied"
  }



function CardContainer (){
  

  // let sectionName = "what went well?"
  // figure out how to render each value in the array

  for(let question of retroQuestions ){
    // return (
    //   <div>
    //    {question}
    //   </div>
    // )
  }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4} className="comment-card-container">

          <div className="section-header">
            
            <div className="section-title">
              
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start" 
              >
                <Grid item>
                  <Icon>sentiment_very_satisfied</Icon>
                </Grid>
                <Grid item className="title">
                  {retroQuestions[0]}
                </Grid>
                <Grid item>
                  <Icon>add_circle_outline</Icon>
                </Grid>
              </Grid>
              


            </div>
          </div>


          <div className="section-comment">
            <CommentCard/>
          </div>




          
          
        </Grid>

        <Grid item xs={4} className="comment-card-container">

          <div className="section-header">
            
            <div className="section-title">
              

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start" 
              >
                <Grid item>
                  <Icon>sentiment_very_satisfied</Icon>
                </Grid>
                <Grid item className="title">
                  {retroQuestions[0]}
                </Grid>
                <Grid item>
                  <Icon>add_circle_outline</Icon>
                </Grid>
              </Grid>
              


            </div>
          </div>


          <div className="section-comment">
            <CommentCard/>
          </div>


          
        </Grid>

        <Grid item xs={4} className="comment-card-container">

          <div className="section-header">
            
            <div className="section-title">
              

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start" 
              >
                <Grid item>
                  <Icon>sentiment_very_satisfied</Icon>
                </Grid>
                <Grid item className="title">
                  {retroQuestions[0]}
                </Grid>
                <Grid item>
                  <Icon>add_circle_outline</Icon>
                </Grid>
              </Grid>
              


            </div>
          </div>


          <div className="section-comment">
            <CommentCard/>
          </div>




          
          
        </Grid>

      </Grid>
    </div>
    
  )
}

function createNewComment (props){
// create comment when clicked

}

function addAction (){

}

export function Retro (props) {

  const sup = useState('hello');
  console.log('retropropsss', props)

  return (
    <div>

      <div className="page-header">
        <PageHeader/>
      </div>

      <div className="cards-container">
        <CardContainer/>
      </div>


    </div>
  )
  
}
