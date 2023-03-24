import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [AuthModule, UsersModule, PropertiesModule, MongooseModule.forRoot('mongodb://127.0.0.1/users', {
    useNewUrlParser: true
  }), MongooseModule.forRoot('mongodb://127.0.0.1/properties', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
