import { NestFactory } from '@nestjs/core';
import { UsersAppModule } from './usersApp.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersAppModule);
  await app.listen(process.env.port ?? 5000);
}

bootstrap()
  .catch(e => {
    Logger.error(`Error while bootstrap Users Services ${e}`)
  })
