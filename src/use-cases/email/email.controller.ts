import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  async sendEmail(
    @Body() emailData: { to: string; subject: string; text: string },
  ) {
    const { to, subject, text } = emailData;
    await this.emailService.sendEmail(to, subject, text);
    return 'Email sent successfully';
  }
}
