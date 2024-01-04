import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Airport } from './entity/airport.entity';
import { Repository } from 'typeorm';
import { AirportDto } from './dto/airport.dto';

@Injectable()
export class AirportService {
  constructor(
    @InjectRepository(Airport) private airportRepository: Repository<Airport>,
  ) {}

  async addAirport(addAirportDto: AirportDto): Promise<AirportDto> {
    const airport: AirportDto = new AirportDto();
    airport.airportName = addAirportDto.airportName;
    airport.cityID = addAirportDto.cityID;
    airport.totalTerminal = addAirportDto.totalTerminal;

    return await this.airportRepository.save(airport);
  }
}
