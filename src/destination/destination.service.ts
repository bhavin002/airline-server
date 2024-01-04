import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from './entity/destination.entity';
import { Repository } from 'typeorm';
import { DestinationDto } from './dto/destination.dto';

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private readonly destinationRepository: Repository<Destination>,
  ) {}

  async addDestination(
    addDestination: DestinationDto,
  ): Promise<DestinationDto> {
    const destination: DestinationDto = new DestinationDto();
    destination.destinationName = addDestination.destinationName;
    return this.destinationRepository.save(destination);
  }
}
