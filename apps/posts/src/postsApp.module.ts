import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { DatabaseModule } from '@app/database';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    PostModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    })
  ],
  controllers: [],
  providers: [],
})
export class PostsAppModule { }
