import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/registration.dto';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const findUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    console.log('findUser', findUser);
    if (findUser) {
      throw new UnauthorizedException('User already exists!');
    }
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = await this.hashPassword(createUserDto.password);
    return this.userRepository.save(user);
  }

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.generateJwtToken(user);

    return token;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  private generateJwtToken(user: User): string {
    const { id, email } = user;
    const payload = { id, email };

    return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
  }
}
