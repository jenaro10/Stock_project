import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';
import { UserInterface } from './interfaces/user.interface';
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {

    //Instancing the userService to get all the methods from there
    constructor(private userService: UsersService){}

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO){
        const user = await this.userService.createUser(createUserDTO)
        
        res.status(HttpStatus.OK).json({
            message: 'received',
            user
        })
    }

    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        res.status(HttpStatus.OK).json({
            message: 'received',
            users
        })
    }
}
