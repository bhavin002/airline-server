import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entity/flight.entity';
import { Repository } from 'typeorm';
import { FlightDto } from './dto/flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async addFlight(addFlight: FlightDto): Promise<FlightDto> {
    const flight: FlightDto = new FlightDto();
    flight.flightName = addFlight.flightName;
    flight.sourceID = addFlight.sourceID;
    flight.destinationID = addFlight.destinationID;
    flight.arrivalTime = addFlight.arrivalTime;
    flight.estimatedTravellingHour = addFlight.estimatedTravellingHour;
    flight.classType = addFlight.classType;
    flight.price = addFlight.price;

    return this.flightRepository.save(flight);
  }

  async getAllFlights(): Promise<FlightDto[]> {
    const flights = this.flightRepository.find();
    return flights;
  }
}
