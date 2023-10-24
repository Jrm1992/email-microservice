import { Injectable, Logger } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerService extends Logger {
  private logger: winston.Logger;

  constructor() {
    super();
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(), // Log to the console
        new winston.transports.File({ filename: 'application.log' }), // Log to a file
      ],
    });
  }

  log(message: string, context?: string) {
    super.log(message, context);
    this.logger.info(message, { context });
  }

  error(message: string, trace: string, context?: string) {
    super.error(message, trace, context);
    this.logger.error(message, { context, trace });
  }
}
