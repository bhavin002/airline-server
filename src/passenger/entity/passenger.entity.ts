import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Passenger {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  passportNumber: string;

  @Column()
  visaNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column()
  pincode: number;
}
