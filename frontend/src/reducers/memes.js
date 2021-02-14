import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (memes = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...memes, action.payload];
        case UPDATE:
            return memes.map((meme) => (meme.id === action.payload.id ? action.payload : meme)); 
        case LIKE:
            return memes.map((meme) => (meme.id === action.payload.id ? action.payload : meme));
        case DELETE:
            return memes.filter((meme) => meme.id !== action.payload);       
        default:
            return memes;
    }
}