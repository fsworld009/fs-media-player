import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { SongRepository } from './song.repository';
import { SongEntity } from './song.entity';
import { CreateSongDto, UpdateSongDto } from './song.dto';

// TODO: error handling
@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongEntity)
    private repository: Repository<SongEntity>,
  ) {}

  async create(body: CreateSongDto): Promise<SongEntity> {
    const song = new SongEntity();
    song.sid = body.sid;
    song.service = body.service;
    song.title = body.title;
    song.comment = body.comment;
    const saved = await this.repository.save(song);
    return saved;
  }

  async get(id: string) {
    const song = await this.repository.findOne({
      where: {
        id,
      },
    });
    if (!song) {
      throw new NotFoundException();
    }
    return song;
  }

  async delete(id: string) {
    const song = await this.get(id);
    await this.repository.remove(song);
  }

  async update(id: string, updated: UpdateSongDto) {
    const song = await this.get(id);
    song.title = updated.title;
    if (updated.comment === '') {
      song.comment = null;
    } else if (updated.comment) {
      song.comment = updated.comment;
    }
    return this.repository.save(song);
  }

  async list() {
    return this.repository.find();
  }
}
