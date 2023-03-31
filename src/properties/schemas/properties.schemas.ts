import { Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema } from "mongoose";

export class PropertiesSchema extends Document {
    @Prop({required: true})
    name: String

    @Prop({required: true})
    description: String

    @Prop({required: true})
    imageURL: String

    @Prop({required: true})
    price: Number

    @Prop(
        raw({

        })
    )
    movable: Record<string, any>
}




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

export const PropSchema = SchemaFactory.createForClass(PropertiesSchema)