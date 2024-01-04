import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportDto } from './dto/airport.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/Auth/auth.guard';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Post('add')
  @UseGuards(AuthGuard)
  async addAirport(@Body() addAirportDto: AirportDto, @Res() res: Response) {
    const airport = await this.airportService.addAirport(addAirportDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Airport added successfully',
      airport,
    });
  }
}
