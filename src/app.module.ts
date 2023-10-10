import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EmailController } from './use-cases/email/email.controller';
import { EmailService } from './use-cases/email/email.service';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ConfigModule.forRoot(), CoreModule],
  controllers: [AppController, EmailController],
  providers: [EmailService],
})
export class AppModule {}
