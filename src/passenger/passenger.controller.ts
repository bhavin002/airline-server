import { Body, Controller, Post, Res, HttpStatus, Get } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { Response } from 'express';
import { AddPassengerDto } from './dto/add_passenger.dto';

@Controller('api/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get()
  async getAllPassengers(@Res() res: Response) {
    try {
      const passengers = await this.passengerService.getAllPasseger();
      return res.status(HttpStatus.OK).json({
        message: 'Passengers fetched successfully',
        passengers,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error in fetching passengers',
        error: error.message,
      });
    }
  }

  @Post('add')
  async addPassenger(
    @Body() addPassengerDto: AddPassengerDto,
    @Res() res: Response,
  ) {
    try {
      const passenger =
        await this.passengerService.addPassseneger(addPassengerDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'Passenger added successfully',
        passenger,
      });
    } catch (error) {
      // console.log('error in register', error);
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error in registering user',
        error: error.message,
      });
    }
  }
}
