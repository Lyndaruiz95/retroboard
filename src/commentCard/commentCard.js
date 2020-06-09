import React, { useState, useEffect } from 'react';
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

// let [comments, setComment] = useState({})

  let comments = [
    {
      id:'1234',
      commentText: 'comment1',
      heartCount: 0,
    },
    {
      id:'001',
      commentText: 'comment2',
      heartCount: 0,
    }

  ]

  useEffect(()=>{
    
  })


  const commentList = comments.map((comment)=>
      <Card className="comment-card">
        <CardContent>
          <TextField 
            fullWidth
            label="write comment here..."
            variant="outlined"
            multiline
            defaultValue={comment.commentText}
          />
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
              {comment.heartCount}
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

  )


  return (
    <div>
      {commentList}
    </div>
  )

}


