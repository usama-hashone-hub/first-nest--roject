import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(body): Promise<User> {
    return await new this.userModel(body).save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id): Promise<User> {
    return await this.userModel
      .findById(id)
      .select('-password -passwordResetCode -passwordResetExpireAt')
      .exec();
  }

  async findOneByEmail(email): Promise<User> {
    return await this.userModel
      .findOne(email)
      .select('-password -passwordResetCode -passwordResetExpireAt')
      .exec();
  }

  async getCreds(email): Promise<User> {
    return await this.userModel.findOne(email).select('password email').exec();
  }

  async update(id, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
