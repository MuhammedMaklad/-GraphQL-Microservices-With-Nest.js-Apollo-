import { Module } from '@nestjs/common';
import { UsersAppService } from './usersApp.service';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    })
  ],
  controllers: [],
  providers: [UsersResolver, UsersAppService],
})
export class UsersAppModule { }
