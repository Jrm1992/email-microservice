import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EmailDto } from './email.dto';

@Controller('email')
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  @ApiOperation({ summary: 'Send an email' })
  @ApiBody({ type: EmailDto })
  @HttpCode(200)
  async sendEmail(@Body() emailDto: EmailDto) {
    return this.emailService.sendEmail(emailDto);
  }
}
