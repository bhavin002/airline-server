import { Module } from '@nestjs/common';
import { AirportController } from './airport.controller';
import { AirportService } from './airport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airport } from './entity/airport.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/Auth/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: '7L1G3v-7q5yN54ZsU1W8pR2bD3mH9eT5',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Airport, User]),
  ],
  controllers: [AirportController],
  providers: [AirportService],
})
export class AirportModule {}
