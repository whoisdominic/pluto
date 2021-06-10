import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, IsPhoneNumber } from 'class-validator';

export class User {
  @IsAlphanumeric()
  @MaxLength(20)
  id: string;
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
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(30)
  firstName?: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(30)
  lastName?: string;
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(30)
  expoKey?: string;
}
