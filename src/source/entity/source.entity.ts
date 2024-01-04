import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Source {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sourceName: string;
}
