import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ClassType, FlightCompany } from '../dto/flight.dto';
import { City } from 'src/city/entity/city.entity';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  flightName: FlightCompany;

  @Column()
  sourceID: string;

  @Column()
  destinationID: string;

  @Column()
  arrivalTime: string;

  @Column()
  estimatedTravellingHour: number;

  @Column()
  classType: ClassType;

  @Column()
  price: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'sourceID' })
  sourceCity: City;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'destinationID' })
  destinationCity: City;
}
