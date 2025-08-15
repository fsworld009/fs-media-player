import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // TODO: dynamic assign port to UI server? Serve UI from this server?
  app.enableCors({
    origin: 'http://localhost:3001',
  });
  await app.listen(3000);
}
bootstrap();
