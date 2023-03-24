import { Document } from "mongoose";

export interface UserInterface extends Document{
    name: String;
    username: String;
    password: String;
}