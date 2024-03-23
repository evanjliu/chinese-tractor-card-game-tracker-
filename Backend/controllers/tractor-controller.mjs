import 'dotenv/config';
import express from 'express';
import * as tractor from '../models/tractor-model.mjs'

// Defining variables to use express
const PORT = process.env.PORT
const app = express();
app.use(express.json());

// -------------------------------------------------------
// Create the controller
app.post ('/tractor', (req,res) => {
    winner.createWinner
});