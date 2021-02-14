import React,{useState, useEffect} from "react";
import useStyles from "./styles";
import {TextField,Button,Typography,Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {createMeme, updateMeme} from "../../actions/memes";

const Form = ({ currentId, setCurrentId }) => {
    const [postData,setPostData] = useState({
        name:'', 
        caption: '',
        url:'',
        createdAt: new Date(),
    });
    const classes = useStyles();
    const meme = useSelector((state) => (currentId ? state.memes.find((m) => m.id === currentId) : null));

    useEffect(() => {
        if (meme) setPostData(meme);
      }, [meme]);

    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(null);
        setPostData({ name: '', caption: '', url: '', createdAt: new Date()});
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostData({createdAt: new Date()});
        if (currentId) {
            dispatch(updateMeme(currentId, postData));
          } else {
            dispatch(createMeme(postData));
          }
          clear();
    };
    
    return(
        <Paper className={classes.paper}>
        <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
            <Typography variant="h6" color="primary" >{currentId ? `Editing your Meme` : 'Post your Meme here'}</Typography>
            <TextField 
                name="name" 
                label="Name" 
                variant="outlined" 
                disabled={currentId ? true : false}
                fullWidth 
                value={postData.name} 
                onChange={(e) => setPostData({...postData,name: e.target.value})}
                />
            <TextField 
                name="caption" 
                label="Caption" 
                variant="outlined" 
                fullWidth 
                value={postData.caption} 
                onChange={(e) => setPostData({...postData,caption: e.target.value})}
                />
            <TextField 
                name="url" 
                label="URL of image" 
                variant="outlined" 
                fullWidth 
                value={postData.url} 
                onChange={(e) => setPostData({...postData,url: e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
    );
}

export default Form;