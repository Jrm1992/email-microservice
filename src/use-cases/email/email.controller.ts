import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from 'src/core/dtos/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  async sendEmail(@Body() emailDto: EmailDto) {
    try {
      await this.emailService.sendEmail(emailDto);
      return 'Email sent successfully';
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }
}
