import { Injectable } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { City } from './entity/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly destinationRepository: Repository<City>,
  ) {}

  async addCity(addDestination: CityDto): Promise<CityDto> {
    const City: CityDto = new CityDto();
    City.cityName = addDestination.cityName;
    return this.destinationRepository.save(City);
  }

  async getAllCities(): Promise<CityDto[]> {
    const cities = this.destinationRepository.find();
    return cities;
  }
}
