import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { SongRepository } from './song.repository';
import { SongEntity } from './song.entity';
import { CreateSongDto } from './song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongEntity)
    private repository: Repository<SongEntity>,
  ) {}

  async create(@Body() body: CreateSongDto): Promise<SongEntity> {
    const song = new SongEntity();
    song.sid = body.sid;
    song.service = body.service;
    song.title = body.title;
    // TODO: error handling
    const saved = await this.repository.save(song);
    return saved;
  }

  async list() {
    return this.repository.find();
  }
}
