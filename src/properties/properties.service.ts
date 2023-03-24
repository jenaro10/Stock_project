import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Property } from "./interfaces/property.interface";
import { CreatePropertyDTO } from "./dto/properties.dto";

@Injectable()
export class PropertiesService {

    constructor(@InjectModel('Properties') propertyModel: Model<Property>){}
}
