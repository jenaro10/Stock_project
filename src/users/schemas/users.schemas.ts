import { Schema } from "mongoose";

export const UsersSchema = new Schema({
    id: String,
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});