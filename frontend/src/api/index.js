import axios from "axios";

const url = 'http://localhost:8081/memes';

export const fetchMemes = () => axios.get(url);
export const createMeme = (newMeme) => axios.post(url, newMeme);
export const updateMeme = (id, updatedMeme) => axios.patch(`${url}/${id}`, updatedMeme);
export const likeMeme = (id) => axios.patch(`${url}/${id}/likeMeme`);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);