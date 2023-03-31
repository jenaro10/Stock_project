import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Property } from "./interfaces/property.interface";
import { CreatePropertyDTO } from "./dto/properties.dto";
import { PropertiesSchema } from './schemas/properties.schemas';

@Injectable()
export class PropertiesService {

    constructor(@InjectModel(PropertiesSchema.name) private readonly propertyModel: Model<Property>){}
}
