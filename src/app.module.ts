import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EmailController } from './application/email/email.controller';
import { EmailService } from './application/email/email.service';
import { ResendService } from './infrastructure/resend/resend.service';
import { LoggerService } from './application/logger/logger.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, EmailController],
  providers: [EmailService, ResendService, LoggerService],
})
export class AppModule {}
