import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CityService } from './city.service';
import { Response } from 'express';
import { CityDto } from './dto/city.dto';

@Controller('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('add')
  async addCity(@Body() addCityDto: CityDto, @Res() res: Response) {
    try {
      const City = await this.cityService.addCity(addCityDto);

      return res.status(HttpStatus.CREATED).json({
        message: 'City added successfully',
        City,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error in creating City',
        error,
      });
    }
  }
}
