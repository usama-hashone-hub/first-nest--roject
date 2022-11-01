import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsHash,
  Matches,
  IsIn,
  IsMobilePhone,
} from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ required: true })
  email: String;

  @IsString()
  @ApiProperty({ required: true })
  password: String;
}
