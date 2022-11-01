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

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  firstname: String;

  @IsString()
  @IsOptional()
  @ApiProperty()
  lastname: String;

  @IsString()
  @IsEmail()
  @ApiProperty({ required: true })
  email: String;

  @IsString()
  @ApiProperty({ required: true })
  password: String;

  @IsString()
  @IsIn(['user', 'admin'])
  @ApiProperty({ required: true })
  role: String;

  @IsOptional()
  @IsMobilePhone()
  @ApiProperty()
  phone: String;

  @IsOptional()
  @ApiProperty()
  dob: String;

  @IsOptional()
  @ApiProperty()
  nationality: String;

  @IsOptional()
  @ApiProperty()
  country: String;

  @IsString()
  @IsIn(['male', 'female'])
  @ApiProperty()
  gender: String;

  @IsString()
  @ApiProperty()
  photo: String;
}
