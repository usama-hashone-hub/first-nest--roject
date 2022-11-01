import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
const bcrypt = require('bcryptjs');
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getCreds({ email });
    if (await bcrypt.compare(pass, user.password)) {
      return await this.usersService.findOneByEmail({ email });
    }
    return null;
  }

  async login(user: any) {
    const token = await this.generateToken(user);
    return {
      user,
      token,
    };
  }

  async register(user: any) {
    user['password'] = await bcrypt.hash(user.password, 8);
    const userData = await this.usersService.create(user);
    const token = await this.generateToken(userData);
    return {
      user: userData,
      token,
    };
  }

  generateToken = async (user) => {
    const payload = {
      email: user.email,
      sub: user._id,
    };
    return this.jwtService.sign(payload, { secret: process.env.JWT_SECRET });
  };
}
