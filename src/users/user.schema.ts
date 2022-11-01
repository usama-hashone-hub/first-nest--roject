import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, trim: true })
  firstname: String;

  @Prop({ type: String, trim: true })
  lastname: String;

  @Prop({ type: String, trim: true, unique: true, lowercase: true })
  email: String;

  @Prop({ type: String, trim: true, minlength: 8, private: true })
  password: String;

  @Prop({ type: String, enum: ['user', 'admin'], default: 'user' })
  role: String;

  @Prop({ type: Number })
  verificationCode: Number;

  @Prop({ type: String, unique: true })
  phone: String;

  @Prop({ type: Boolean, default: false })
  phoneVerified: Boolean;

  @Prop({ type: String })
  verificationSid: String;

  @Prop({ type: Boolean, default: false })
  isEmailVerified: Boolean;

  @Prop({ type: String })
  dob: String;

  @Prop({ type: String })
  nationality: String;

  @Prop({ type: String })
  country: String;

  @Prop({ type: String, enum: ['male', 'female'] })
  gender: String;

  @Prop({ type: String })
  passwordResetCode: String;

  @Prop({ type: Date })
  passwordResetExpireAt: Date;

  @Prop({ type: String })
  photo: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
