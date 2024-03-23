// Models for the current wins in setup

import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500: Failed to connect to the MongoDB database. Please try again.' });
    } else  {
        console.log('Connected to the MongoDB database and ready to operate.');
    }
});

// Schema: Defines the collection
const winnerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    wins: {
        type: Number,
        required: true,
        min:0,
        default:0
    }
});

// Create model and retrieves a promise
const retrieveWinners = async () => {
    const query = winners.find();
    return query.exec();
};

// Retrieve by id
const retrieveWinnerById = async (_id) => {
    const query = winners.findById({_id: _name});
    return query.exec();
};

// DELETE model based on _id  *****************************************
const deleteWinnerById = async (_id) => {
    const result = await winners.deleteOne({_id: _id});
    return result.deletedCount;
};
