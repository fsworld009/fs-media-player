import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongEntity } from './song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SongEntity])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
