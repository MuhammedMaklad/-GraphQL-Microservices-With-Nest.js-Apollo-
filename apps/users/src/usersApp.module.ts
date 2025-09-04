import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [UsersResolver],
})
export class UsersAppModule { }
