import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from "@nestjs/mongoose";
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { enviroments } from "./enviroments";
import config from "./config";
import 'dotenv/config'

@Module({
  imports: [AuthModule, UsersModule, PropertiesModule, DatabaseModule, ConfigModule.forRoot({
    envFilePath: enviroments[process.env.NODE_ENV] || '.env',
    load: [config],
    isGlobal: true,
    validationSchema: Joi.object({
      MONGO_URI: Joi.string().required()

    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
