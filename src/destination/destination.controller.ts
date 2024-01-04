import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Response } from 'express';
import { DestinationDto } from './dto/destination.dto';

@Controller('destination')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Post('add')
  async addDestination(
    @Body() addDestinationDto: DestinationDto,
    @Res() res: Response,
  ) {
    try {
      const destination =
        await this.destinationService.addDestination(addDestinationDto);

      return res.status(HttpStatus.CREATED).json({
        message: 'Destination added successfully',
        destination,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error in creating destination',
        error,
      });
    }
  }
}
