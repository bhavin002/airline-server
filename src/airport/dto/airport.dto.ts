import { IsNotEmpty, IsOptional } from 'class-validator';

export class AirportDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  airportName: string;

  @IsNotEmpty()
  cityID: string;

  @IsNotEmpty()
  totalTerminal: number;
}
