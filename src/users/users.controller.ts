import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entinty';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get all users or by name
  @ApiOkResponse({ type: User, isArray: true })
  @ApiNotFoundResponse({ type: User })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.usersService.findAll(name);
  }
  // Get user by id
  @Get(':id')
  getUsersById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.usersService.findById(id);

    if (!user) throw new NotFoundException();

    return;
  }
  // Create new user
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
