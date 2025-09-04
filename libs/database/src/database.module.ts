import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from "joi";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: ".env"
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri = config.get<string>("MONGODB_URI");
        if (!uri)
          throw new Error('MONGODB_URI is not defined in environment variables');
        return {
          uri,
          retryAttempts: 3,
          retryDelay: 3000,
          connectionFactory: (connection) => {
            connection.on('connected', () => {
              Logger.log("MongoDB Connected Successfully")
            });
            connection.on('error', (e) => {
              Logger.error(`MongoDb Connection Error ${e}`)
            })
            connection.on('disconnected', () => {
              Logger.warn("MongoDB Disconnected");
            });
            return connection; // This line is CRITICAL - must return the connection
          }
        }
      }
    })
  ],
  providers: [],
  exports: [MongooseModule],
})
export class DatabaseModule { }
