import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const getMemes = () => async(dispatch) => {
    try {
        const {data} = await api.fetchMemes();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createMeme = (meme) => async(dispatch) => {
    try {
        const {data} = await api.createMeme(meme);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMeme = (id, meme) => async (dispatch) => {
    try {
      const { data } = await api.updateMeme(id, meme);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likeMeme = (id) => async (dispatch) => {
    try {
      const { data } = await api.likeMeme(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteMeme = (id) => async (dispatch) => {
    try {
      await api.deleteMeme(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };