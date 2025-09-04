import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);



  Logger.log("Gateway Server Running on http://localhost:3000/")
}

bootstrap()
  .catch(e => Logger.error(`Error while bootstrap gateway server ${e}`))
