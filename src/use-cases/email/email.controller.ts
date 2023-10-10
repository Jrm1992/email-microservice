import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from 'src/core/dtos/email.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('email')
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  @ApiOperation({ summary: 'Send an email' })
  @ApiBody({ type: EmailDto })
  async sendEmail(@Body() emailDto: EmailDto) {
    try {
      await this.emailService.sendEmail(emailDto);
      return 'Email sent successfully';
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }
}
