import { Injectable } from '@nestjs/common';
import 'dotenv/config'
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./interfaces/user.interface";
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
    //This is the Mongodb connection
    constructor(@InjectModel('Users') private readonly userModel: Model<UserInterface>){}
    // private readonly users: User[] = [
    //     {
    //         id: 1,
    //         name: 'sebas',
    //         username: process.env.USERNAME,
    //         password: process.env.PASSWORD
    //     },
    // ];

    async getUsers(): Promise<UserInterface[]> {
        const users = await this.userModel.find() //This find method is from mongoose
        return users
    }

    async getUser(userID: string): Promise<UserInterface> {
        const user = await this.userModel.findById(userID)
        return user
    }

    createUser(createUserDTO: CreateUserDTO): Promise<UserInterface> {
        const user = new this.userModel(createUserDTO);
        return user.save()
    }

    async deleteUser(userID: string): Promise<UserInterface> {
        const userDeleted = await this.userModel.findByIdAndDelete(userID)
        return userDeleted
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<UserInterface> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, createUserDTO, {new: true})
        return updatedUser;
    }

    // async findOne(username: string): Promise<User | undefined>{
    //     return this.users.find(user => user.username === username);
    // }
}
