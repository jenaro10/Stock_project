import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    //If we find a username, we are gonna take out all the information about it and show it
    async validateUser( username: string, password: string): Promise<any>{
        // console.log(typeof username, typeof password)
        // const user = await this.usersService.getUser(userID)
        const user2 = await this.usersService.getUserInfo(username)
        if (user2.username === username && user2.password === password){
            console.log("passed!")
            const {password, username,...rest} = user2
            return rest;
        }
        return null;
    }

    async login(user: any){
        const payload = {name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
