import { Document } from "mongoose";

export interface Property extends Document{
    name: string;
    serialNumber?: string
    description: string;
    imageURL: string;
    price: number;
    movable: boolean;
    electronic: boolean;
}