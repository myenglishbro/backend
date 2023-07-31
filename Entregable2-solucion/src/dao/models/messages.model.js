import mongoose from 'mongoose';

const collection = "Messages";

const schema = new mongoose.Schema({
    user: String,
    message: String
});


const messageModel = mongoose.model(collection,schema);

export default messageModel;