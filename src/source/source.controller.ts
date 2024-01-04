import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SourceService } from './source.service';
import { Response } from 'express';
import { SourceDto } from './dto/source.dto';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceSerivce: SourceService) {}

  @Post('add')
  async addSource(@Body() soureDto: SourceDto, @Res() res: Response) {
    try {
      const source = await this.sourceSerivce.addSource(soureDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'Source added successfully',
        source,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error in creating source',
        error: error.message,
      });
    }
  }
}
