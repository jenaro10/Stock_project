import { Document } from "mongoose";

export interface UserInterface extends Document{
    _id: String;
    name: String;
    username: String;
    password: String;
    roles: "Admin" | "Cliente";
}