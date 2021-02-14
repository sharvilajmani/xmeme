import React from "react";
import Meme from "./Meme/Meme";
import useStyles from "./styles";
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from "@material-ui/core";

const Memes = ({setCurrentId}) => {
    const classes = useStyles();
    const memes = useSelector((state) => state.memes);

    return(
        !memes.length ? <CircularProgress /> : (
            <Grid container direction="column" className={classes.mainContainer}  spacing={3} >
                { memes.map((meme) => (
                    <Grid item key={meme.id}  xs={12} sm={6}>
                        <Meme meme={meme} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Memes;