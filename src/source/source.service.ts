import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from './entity/source.entity';
import { SourceDto } from './dto/source.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
  ) {}

  async addSource(addSource: SourceDto): Promise<SourceDto> {
    const source: SourceDto = new SourceDto();
    source.sourceName = addSource.sourceName;
    return this.sourceRepository.save(source);
  }
}
