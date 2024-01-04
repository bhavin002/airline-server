import { IsNotEmpty, IsOptional } from 'class-validator';

export class DestinationDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  destinationName: string;
}
