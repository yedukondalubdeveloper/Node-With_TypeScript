import mongoose, { Schema, model } from 'mongoose';

export interface User extends mongoose.Document {
    fname: string;
    lname: string;
    email: string;
    phone: string;
};

const UserSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String 
});

export default model<User>('User', UserSchema);