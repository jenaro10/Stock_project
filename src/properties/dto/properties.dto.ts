import { ElectronicProperties, FurnitureProperties, VehiclesProperties, NonMovableProperties } from "../interfaces/property.interface";

export class CreatePropertyDTO {
    id: string;
    name: string;
    description: string;
    imageURL: string;
    price: number;
    movable: {
        electronic: Laptop | Printer | Tv | Projector,
        furniture: Chair | Sofa | Table | Lamp,
        vehicles: Car | Plane | Bus
    }
    nonMovable: House | Building | Land
}

class Laptop {
    electronicProperties: ElectronicProperties
    OS: string
    resolutionScreen: string
    ram: number
    processor: string
    gpu: string
    hardDrive: string
}

class Printer {
    electronicProperties: ElectronicProperties
}   

class Tv {
    electronicProperties: ElectronicProperties
    resolutionScreen: string
    displayResolution: string
    screenSize: number
    remoteControl: boolean
}

class Projector {
    electronicProperties: ElectronicProperties
    remoteControl: boolean
    displayResolution: string
    brightness: string
}

class Chair {
    furnitureProperties: FurnitureProperties
}

class Sofa {
    furnitureProperties: FurnitureProperties
    numberOfCushions: number
}

class Table {
    furnitureProperties: FurnitureProperties
    topMaterial: string
}

class Lamp {

}

class Car {
    vehiclesProperties: VehiclesProperties
}

class Bus {
    vehiclesProperties: VehiclesProperties
}

class Plane {
    vehiclesProperties: VehiclesProperties
}

class Building {
    nonMovableProperties: NonMovableProperties
    doors: number
    parking: boolean
}

class House {
    nonMovableProperties: NonMovableProperties
    pool: boolean
}

class Land {
    size: number
}