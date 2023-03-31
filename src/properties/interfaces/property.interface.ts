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

export interface ElectronicProperties {
    color: string
    brand: string
    serialNumber: string
    wired: boolean
    usbPorts: number
}

export interface FurnitureProperties {
    color: string
    form: string
    legs?: number
    material: string
    dimensions: string
    cushioning: string
}

export interface VehiclesProperties {
    color: string
    engine: string
    wheels?: number
    seats: number
    cushioning: string
    airCondition: boolean
}

export interface NonMovableProperties {
    color: string
    floors: number
    rooms: number
    windows: number
}
