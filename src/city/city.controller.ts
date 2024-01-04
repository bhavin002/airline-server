import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CityService } from './city.service';
import { Response } from 'express';
import { CityDto } from './dto/city.dto';
import { AuthGuard } from 'src/Auth/auth.guard';

@Controller('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('add')
  @UseGuards(AuthGuard)
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

  @Get()
  async getAllCities(@Res() res: Response) {
    try {
      const Cities = await this.cityService.getAllCities();
      return res.status(HttpStatus.OK).json({
        message: 'All Cities',
        Cities,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error in getting Cities',
        error,
      });
    }
  }
}
