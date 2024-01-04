import { IsNotEmpty, IsOptional } from 'class-validator';

export class CityDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  cityName: string;
}
