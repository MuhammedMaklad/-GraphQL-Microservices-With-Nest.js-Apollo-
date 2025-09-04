import { NestFactory } from '@nestjs/core';
import { UsersAppModule } from './usersApp.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersAppModule);
  await app.listen(process.env.port ?? 5000);
}
bootstrap();
