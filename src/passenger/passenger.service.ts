import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passenger } from './entity/passenger.entity';
import { Repository } from 'typeorm';
import { AddPassengerDto } from './dto/add_passenger.dto';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>,
  ) {}

  async addPassseneger(
    addPassenger: AddPassengerDto,
  ): Promise<AddPassengerDto> {
    const passenger: AddPassengerDto = new AddPassengerDto();
    passenger.passportNumber = addPassenger.passportNumber;
    passenger.visaNumber = addPassenger.visaNumber;
    passenger.firstName = addPassenger.firstName;
    passenger.lastName = addPassenger.lastName;
    passenger.email = addPassenger.email;
    passenger.address = addPassenger.address;
    passenger.contact = addPassenger.contact;
    passenger.pincode = addPassenger.pincode;

    return this.passengerRepository.save(passenger);
  }

  async getAllPasseger(): Promise<AddPassengerDto[]> {
    const passengers = await this.passengerRepository.find();
    return passengers;
  }
}
