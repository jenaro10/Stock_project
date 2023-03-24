import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    //If we find a username, we are gonna take out all the information about it and show it
    async validateUser(userID: string): Promise<any>{
        const user = await this.usersService.getUser(userID)

        if (user){
            const {password, username,...rest} = user
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
