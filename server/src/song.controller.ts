import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './song.dto';

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  create(@Body() body: CreateSongDto) {
    return this.songService.create(body);
  }

  // TODO: Better list schema (page number, total, ..etc)
  @Get()
  list() {
    return this.songService.list();
  }
}
