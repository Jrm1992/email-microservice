import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ConfigModule.forRoot(), CoreModule],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
