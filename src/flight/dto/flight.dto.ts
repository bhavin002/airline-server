import { IsNotEmpty, IsOptional } from 'class-validator';

export class FlightDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  flightName: FlightCompany;

  @IsNotEmpty()
  sourceID: string;

  @IsNotEmpty()
  destinationID: string;

  @IsNotEmpty()
  arrivalTime: string;

  @IsNotEmpty()
  estimatedTravellingHour: number;

  @IsNotEmpty()
  classType: ClassType;

  @IsNotEmpty()
  price: number;
}

export enum ClassType {
  ECONOMY = 'Economy',
  BUSINESS = 'Business',
  FIRST = 'First',
}

export enum FlightCompany {
  INDI_GO = 'IndiGo',
  AIR_INDIA = 'Air India',
  AIR_INDIA_EXPRESS = 'Air India Express',
  AIR_ARABIA = 'Air Arabia',
  SPICE_JET = 'SpiceJet',
  VISTARA = 'Vistara',
  QATAR_AIRWAYS = 'Qatar Airways',
  EMIRATES = 'Emirates',
}
