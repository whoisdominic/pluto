import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  username: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(32)
  password: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(50)
  email?: string;
  @ApiProperty()
  @MaxLength(30)
  @IsPhoneNumber()
  phoneNumber: string;
}
