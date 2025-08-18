import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

/* eslint-disable @typescript-eslint/no-unsafe-call */

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  sid: string;

  @IsString()
  @IsOptional()
  service: string = 'youtube';

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  comment: string = '';
}

export class UpdateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  comment: string = '';
}
