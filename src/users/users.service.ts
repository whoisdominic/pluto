import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entinty';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Dominic' },
    { id: 1, name: 'Luke' },
    { id: 2, name: 'Dominic' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }
  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const newUser = { id: uuidv4(), ...CreateUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
