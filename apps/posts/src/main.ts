import { NestFactory } from '@nestjs/core';
import { PostsAppModule } from "./postsApp.module";
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PostsAppModule);
  await app.listen(process.env.port ?? 4000);
}
bootstrap()
  .catch(e => Logger.error(e)); 