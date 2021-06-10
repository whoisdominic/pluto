import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entinty';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '0',
      username: 'dominic',
      firstName: 'dominic',
      lastName: 'cobb',
      phoneNumber: '2064896538',
      password: 'z0jIelanffkx',
    },
    {
      id: '1',
      username: 'yumna',
      firstName: 'yumna',
      lastName: 'cobb',
      phoneNumber: '5555555555',
      password: 'z0jIelanafkx',
    },
    {
      id: '2',
      username: 'ahmed',
      firstName: 'ahmed',
      lastName: 'cobb',
      phoneNumber: '2064895555',
      password: 'z0jIelanfkdx',
    },
  ];

  findAll(username?: string): User[] {
    if (username) {
      return this.users.filter((user) => user.username === username);
    }
    return this.users;
  }
  findById(userId: string): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const newUser = { id: uuidv4(), ...CreateUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
