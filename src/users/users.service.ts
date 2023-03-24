import { Injectable } from '@nestjs/common';
import 'dotenv/config'
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/users.dto";

//This is the user structure or fields to save in a db.
export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') userModel: Model<User>){}
    private readonly users: User[] = [
        {
            id: 1,
            name: 'sebas',
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        },
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
