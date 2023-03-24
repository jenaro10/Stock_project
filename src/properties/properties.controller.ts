import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {

    @Post('/create')
    createProperty(@Res() res, @Body() CreatePropertyDTO){
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }
}
