import React, {useEffect, useState} from "react";
import {Container, AppBar, Grid, Typography, Grow} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getMemes} from "./actions/memes";
import crio from "./images/crio.png";
import useStyles from "./styles";
import Form from "./components/Form/Form";
import Memes from "./components/Memes/Memes";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "XMeme";
        dispatch(getMemes());
      }, [dispatch, currentId]);

    return(
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Meme Stream</Typography>
          <img className={classes.image} src={crio} alt="crio" height="60" />
        </AppBar>
        <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
          <Grid container className={classes.mainContainer} justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Memes setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
    );
}

export default App;