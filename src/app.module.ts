import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EmailController } from './use-cases/email/email.controller';
import { EmailService } from './use-cases/email/email.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, EmailController],
  providers: [EmailService],
})
export class AppModule {}
