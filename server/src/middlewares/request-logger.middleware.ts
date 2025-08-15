import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`REQUEST [${req.method.toUpperCase()}] ${req.url}`);
    if (req.body) {
      console.log(`BODY: ${JSON.stringify(req.body, null, 2)}`);
    }
    if (next) {
      next();
    }
  }
}
