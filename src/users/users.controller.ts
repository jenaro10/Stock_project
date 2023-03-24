import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Post('/create')
    createUser(@Res() res, @Body() createUserDTO){
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }
}
