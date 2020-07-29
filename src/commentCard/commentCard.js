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
  console.log('CommentCard-props',props)

  // upsading the list of comments
  let [comments, setComment] = useState(props.props)
  console.log('commentCard-comments', comments)

  useEffect(()=>{
    console.log('updating props- commentCard')
    setComment(props.props)
    
  })

  let commentCardList

  if (comments) {
    commentCardList = comments.map((comment)=>
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

  ) }




  return (
    <div>
      {commentCardList}
    </div>
  )

}


