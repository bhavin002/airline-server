import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddPassengerDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  passportNumber: string;

  @IsNotEmpty()
  visaNumber: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  pincode: number;
}
