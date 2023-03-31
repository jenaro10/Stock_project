import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import config from "../config";
import 'dotenv/config'

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => {
                return {
                    uri: process.env.MONGO_URI
                }
            },
            inject: [config.KEY]
        })
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
