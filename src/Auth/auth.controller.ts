import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './auth.service';
import { CreateUserDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.userService.createUser(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'User registerd successfully',
        user,
      });
    } catch (error) {
      console.log('error in register', error);
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error in registering user',
        error: error.message,
      });
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const resData = await this.userService.login(loginDto);
      return res.status(HttpStatus.OK).json({
        message: 'login successfully',
        token: resData.token,
        isAdmin: resData.isAdmin,
      });
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid credentials',
        error: error.message,
      });
    }
  }
}
