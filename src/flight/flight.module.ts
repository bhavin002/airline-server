import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './entity/flight.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/Auth/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: '7L1G3v-7q5yN54ZsU1W8pR2bD3mH9eT5',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Flight, User]),
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
