import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    log('token', token);

    if (!token) {
      return false;
    }

    const decodedToken = await this.jwtService.decode(token);

    log('decodedToken', decodedToken);

    if (decodedToken.exp < Date.now() / 1000) {
      // log('token expired');
      throw new UnauthorizedException('Token expired');
    }

    const userData = await this.jwtService.verifyAsync(token);
    const user = await this.userRepository.findOne({
      where: { email: userData.email },
    });
    if (!user) {
      throw new UnauthorizedException('Please authenticate!');
    }

    log('user', user);

    if (!user || !user.isAdmin) {
      return false;
    }

    return true;
  }
}
