import { Schema } from "mongoose";

export const PropertiesSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true},
    price: {type: Number, required: true},
    movable: {type: Boolean, required: true},
});