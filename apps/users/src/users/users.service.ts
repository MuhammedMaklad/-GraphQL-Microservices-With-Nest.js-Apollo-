import { Injectable, Logger } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly userRepository: UserRepository) { }

  async create(createUserInput: CreateUserInput) {
    const user = await this.userRepository.create(createUserInput);
    this.logger.log(user);
    return user;
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ _id: id });
    return user;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const user = this.userRepository.findOneAndUpdate({ _id: id }, updateUserInput);
    return user;
  }

  remove(id: string) {
    const user = this.userRepository.removeById(id);
    return user;
  }
}
