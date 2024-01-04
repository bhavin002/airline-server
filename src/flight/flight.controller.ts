import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDto } from './dto/flight.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/Auth/auth.guard';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('addFlight')
  @UseGuards(AuthGuard)
  async addFlight(@Body() addFlight: FlightDto, @Res() res: Response) {
    try {
      const flight = await this.flightService.addFlight(addFlight);
      return res.status(HttpStatus.CREATED).json({
        message: 'Flight added successfully',
        flight,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Flight not added!',
        status: 400,
      });
    }
  }

  @Get()
  async getAllFlights(@Res() res: Response) {
    try {
      const flights = await this.flightService.getAllFlights();
      return res.status(HttpStatus.OK).json({
        message: 'All flights',
        flights,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: No flights found!',
        status: 400,
      });
    }
  }
}
