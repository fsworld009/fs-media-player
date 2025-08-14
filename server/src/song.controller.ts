import { Body, Controller, Post } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './song.dto';

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  create(@Body() body: CreateSongDto) {
    return this.songService.create(body);
  }
}
