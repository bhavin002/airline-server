import { City } from 'src/city/entity/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  airportName: string;

  @Column()
  cityID: string;

  @Column()
  totalTerminal: number;

  @ManyToOne(() => City, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'cityID' })
  city: City;
}
