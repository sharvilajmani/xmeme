import React from "react";
import useStyles from "./styles";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton, CardHeader} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from "moment";
import { useDispatch } from 'react-redux';
import { deleteMeme,likeMeme } from '../../../actions/memes';

const Meme = ({meme,setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const slideUp = () => {
      window[`scrollTo`]({top:0,behavior:'smooth'});
    }
    return(
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => {
            setCurrentId(meme.id);
            slideUp();
            }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={meme.name}
        subheader={moment(meme.createdAt).fromNow()}
      />
        <div className={classes.title}>
            <Typography variant="h6">{meme.caption}</Typography>
        </div>
        
        <CardMedia className={classes.media} image={meme.url} title={meme.name} />
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likeMeme(meme.id))}>
                <ThumbUpAltIcon fontSize="small" />
                &nbsp; Like &nbsp;
                {meme.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deleteMeme(meme.id))}>
                <DeleteIcon fontSize="small" />
                Delete
            </Button>
        </CardActions>
    </Card>
    );
}

export default Meme;