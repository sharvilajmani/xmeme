import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import {getMemes, getMeme, createMeme, updateMeme, deleteMeme, likeMeme} from "../controllers/memes.js";

const router = express.Router();

// Routes
/**
 * @swagger
 * /:
 *  get:
 *     description: Use to get all memes
 *     responses:
 *        '200':
 *          description: A successful response
 */
router.get('/', getMemes);

/**
 * @swagger
 * /{id}:
 *  get:
 *     description: Use to get a meme with specified id
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: String
 *          required: true
 *     responses:
 *        '200':
 *          description: A successful response
 */
router.get('/:id', getMeme);

/**
 * @swagger
 * /:
 *  post:
 *     description: Use to create a meme
 *     parameters:
 *        - in: body
 *          name: body
 *          required: true
 *     requestBody:
 *       content: 
 *        application/json:
 *     responses:
 *        '201':
 *          description: Meme created successfully
 *        '500': 
 *          description: Failure in creating meme
 */
router.post('/', createMeme);

/**
 * @swagger
 * /{id}:
 *  patch:
 *     description: Use to create a meme
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: String
 *          required: true
 *        - in: body
 *          name: body
 *          required: true
 *     requestBody:
 *       content: 
 *        application/json:
 *     responses:
 *        '200':
 *          description: Meme updated successfully
 */
router.patch('/:id',updateMeme);

router.delete('/:id', deleteMeme);
router.patch('/:id/likeMeme', likeMeme);

export default router;