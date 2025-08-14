## Server

Modified from https://github.com/nestjs/typescript-starter/commit/76d8e962aa4ecb19efb26a456e49126c8843d6e4

Customizes:

1. linting rule: single quote, max-length 100
2. Change to pnpm



```
npm install -g pnpm@latest-10
pnpm i --frozen-lockfile

npm run start:dev
# open http://localhost:3000/
```

## Known Issue

### Extending TypeORM repository

song.repository.ts
```ts
import { Repository, DataSource } from 'typeorm';
import { SongEntity } from './song.entity';
import { Injectable } from '@nestjs/common'; // If using NestJS

@Injectable() // If using NestJS
export class SongRepository extends Repository<SongEntity> {
  constructor(private dataSource: DataSource) {
    super(SongEntity, dataSource.createEntityManager());
  }

  public async createSong(sid: string, service: string, title: string) {
    const song = new SongEntity();
    song.sid = sid;
    song.service = service;
    song.title = title;
    const saved = await this.save(song);
    return saved;
  }
}
```

This results in `createSong` not a function error when injecting SongRepository into service.

Seems related to TS typing

* https://www.reddit.com/r/Nestjs_framework/comments/1ia96k4/typeorm_custom_repositories/
* https://www.reddit.com/r/nestjs/comments/17yw3ax/issues_when_i_create_custom_repositories/

However, consider that there is already Nestjs service class to handle entity manipulation,
will only use default Repositories to avoid this headache now.