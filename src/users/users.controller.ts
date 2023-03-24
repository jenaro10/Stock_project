import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {

    @Post('/create')
    createUser(@Res() res, @Body() createUserDTO: CreateUserDTO){
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }
}
