import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entity/city.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/Auth/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: '7L1G3v-7q5yN54ZsU1W8pR2bD3mH9eT5',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([City, User]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
