import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreatePropertyDTO } from "./dto/properties.dto";

@Controller('properties')
export class PropertiesController {

    @Post('/create')
    createProperty(@Res() res, @Body() createPropertyDTO: CreatePropertyDTO){
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }
}
