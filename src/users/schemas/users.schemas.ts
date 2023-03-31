import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class UsersSchema extends Document {

    @Prop({required: false, index: true})
    id: String;

    @Prop({required: true})
    name: String;

    @Prop({required: true})
    username: String;

    @Prop({required: true})
    password: String;

    @Prop({required: true})
    roles: "Admin" | "Cliente";
}

export const USchema = SchemaFactory.createForClass(UsersSchema)