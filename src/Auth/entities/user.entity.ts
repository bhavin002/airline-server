import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  email: string;

  @Column()
  password: string;
}
