import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto, UpdateSongDto } from './song.dto';

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

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.songService.get(id);
  }

  @Put('/:id')
  put(@Param('id') id: string, @Body() body: UpdateSongDto) {
    return this.songService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.songService.delete(id);
    return '';
  }
}
