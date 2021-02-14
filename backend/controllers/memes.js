import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";
import validURL from "valid-url";

//Method to get all memes
export const getMemes = async (req,res) => {
    try {
        const postMessages = (await PostMessage.find()).reverse().slice(0,100);

        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}; 

//Method to get meme with given id
export const getMeme = async (req, res) => { 
    const { id } = req.params;

    try {
        const meme = await PostMessage.findById(id);
        
        res.status(200).json(meme);
    } catch (error) {
        res.status(404).json({ message: "Meme with given id not found" });
    }
}

//Method to create a meme
export const createMeme = async (req,res) => {
    const meme = req.body;
    if(validURL.isUri(meme.url)){
    const newMeme = new PostMessage(meme);
    const postMessages = await PostMessage.find();

    if(postMessages.find(o => o.name === newMeme.name && o.caption === newMeme.caption && o.url === newMeme.url)) return res.status(409).send("Duplicate memes are not allowed");

    try {
        await newMeme.save();
    
        res.status(201).json({id: newMeme.id});
    } catch (error) {
        res.status(409).json({message: error.message});
    }}
    else{
        res.status(409).send("Invalid URL");
    }
};

//Method to update existing meme
export const updateMeme = async (req,res) => {
    const {id} = req.params;
    const meme = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No meme with that id");

    const updatedMeme = await PostMessage.findByIdAndUpdate(id, {...meme, id}, {new: true});

    res.json(updatedMeme);
};

//Method to delete meme
export const deleteMeme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Meme with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Meme deleted successfully." });
}

//Method to like a meme
export const likeMeme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Meme with id: ${id}`);
    
    const meme = await PostMessage.findById(id);

    const updatedMeme = await PostMessage.findByIdAndUpdate(id, { likeCount: meme.likeCount + 1 }, { new: true });
    
    res.json(updatedMeme);
}
