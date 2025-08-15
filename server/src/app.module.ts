import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongModule } from './song.module';
import { RouterModule } from '@nestjs/core';
import { SongEntity } from './song.entity';
import { RequestLoggerMiddleware } from './middlewares/request-logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [SongEntity],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    SongModule,
    RouterModule.register([
      {
        path: 'songs',
        module: SongModule,
        //children: []
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
