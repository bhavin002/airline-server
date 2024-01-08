// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Auth/auth.module';
import { User } from './Auth/entities/user.entity';
import { appConfig } from './config/config'; // Import the new configuration file
import { PassengerModule } from './passenger/passenger.module';
import { Passenger } from './passenger/entity/passenger.entity';
import { CityModule } from './city/city.module';
import { City } from './city/entity/city.entity';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entity/flight.entity';
import { AirportModule } from './airport/airport.module';
import { Airport } from './airport/entity/airport.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig], // Include the new configuration file
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.hostName'),
        username: configService.get<string>('database.userName'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.databaseName'),
        entities: [User, Passenger, City, Flight, Airport],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    PassengerModule,
    CityModule,
    FlightModule,
    AirportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
