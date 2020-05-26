import React, { useState } from 'react';
import './commentCard.css'


import { 
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
  TextField,
  CardActions,
  Icon
} from '@material-ui/core'




function addActionComment (props){
  // add action/followup comment here



}

function removeActionComment (props){
  // remove action/followup comment 
}

function likeComment (props){
  // like comment + disable like option

}

function removeCommentCard (props){
  // remove entire comment card

}


export function CommentCard (props) {

  return (
    <div>
      <Card>

        <CardContent>
          <TextField fullWidth label="write comment here..." variant="outlined" multiline  />
        </CardContent>

        <CardActions className="card-actions">
          <Grid container
          direction="row"
          justify="space-between"
          alignItems="flex-start" 
          >
            <Grid item >
              <Icon>favorite_border</Icon>
              
            </Grid>
            <Grid item >
              value
            </Grid>
            <Grid item >
              <Icon>chat_bubble_outline</Icon>
            </Grid>
            <Grid item >
              <Icon>delete_outline</Icon>
            </Grid>
          </Grid>
        </CardActions>

        {/* move to addCardAction function */}
        <Divider variant="middle" className="comment-divider" />
        <CardContent className="action-comment">
          <TextField fullWidth label="action" variant="filled" multiline />
          <CardActions className="card-actions">
            
          </CardActions>
        </CardContent>
        

      </Card>
    </div>
  )

}


