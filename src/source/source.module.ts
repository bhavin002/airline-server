import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { Source } from './entity/source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  controllers: [SourceController],
  providers: [SourceService],
})
export class SourceModule {}
