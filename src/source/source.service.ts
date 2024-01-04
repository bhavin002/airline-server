import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from './entity/source.entity';
import { SourceDto } from './dto/source.dto';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
  ) {}

  async addSource(addSource: SourceDto): Promise<SourceDto> {
    const source: SourceDto = new SourceDto();
    source.sourceName = addSource.sourceName;
    log('source', source);
    return this.sourceRepository.save(source);
  }
}