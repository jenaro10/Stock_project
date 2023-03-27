import { Schema } from "mongoose";

export const PropertiesSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true},
    price: {type: Number, required: true},
    movable: {type: Number, required: true}
    }
);




// class Laptop {
//     brand: String
//     serialNumber: String
// }

class Chair {
    legs: String
    color: String
}

class Sofa {
    color: String
}

class Table {
    legs: String
    color: String
}

class Lamp {

}

class Printer {
    brand: String
    serialNumber: String
}

class Tv {
    brand: String
    serialNumber: String
}

class Projector {
    brand: String
    serialNumber: String
}

// export const schema = new Schema({
//     id: String,
//     name: String,
//     description: String,
//     imageURL: String,
//     price: Number,
//     movable: {
//         electronic: Type,
//         furniture: [Chair, Sofa, Table, Lamp]
//     },
//     nonMovable: {
//         building: []
//     },
// }
// )
