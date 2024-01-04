import { IsNotEmpty, IsOptional } from 'class-validator';

export class SourceDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  sourceName: string;
}
