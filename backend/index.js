import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import postMemes from "./routes/memes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const swaggerDefinition = {
    info: {
      title: 'Memes',
      version: '1.0.0',
      description: 'Endpoints to test the memes',
    },
    host: 'localhost:8081',
    basePath: '/memes',
  };
  
  const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//Every route inside of postMemes should start with memes
app.use('/memes',postMemes);

const API_PORT = 8080;
const CONNECTION_URL = process.env.MONGODB_URI ? process.env.MONGODB_URI :"mongodb://localhost:27017/xmemedatabase";
const PORT = process.env.PORT || 8081;

app.listen(API_PORT, () => console.log(`Swagger running on port ${API_PORT}`));

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);

