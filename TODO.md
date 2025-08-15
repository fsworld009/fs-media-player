## Design

* Multiple songs in one video (for live sessions / 3D live ...etc)

## DB

* All entities: add timestamps
* Artist entity
* Playlist entity
* Tags entity
* TypeORM migration scripts: https://typeorm.io/docs/advanced-topics/migrations/
  * using `synchronize: true` is only feasible in dev env and when you don't care data loss

## Server
* sort / filter songs
* Playlist API (Full CRUD)
  * manage songs to playlist (full CRUD)
  * sort / filter songs in a playlist

* Tags entity and API

* Support more services: Spotify

## UI
* Version 1
  * manage songs
  * list and play all songs
* Future
  * Artist related UI
  * Playlist related UI
    * Create playlist, allow search & multi-select songs
  * Tag related UI
* Support more services: Spotify
