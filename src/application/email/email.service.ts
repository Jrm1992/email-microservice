import { ResendService } from './../../infrastructure/resend/resend.service';
import { Injectable } from '@nestjs/common';
import { EmailDto } from './email.dto';

@Injectable()
export class EmailService {
  constructor(private readonly resendService: ResendService) {}

  async sendEmail(sendEmailDto: EmailDto) {
    return this.resendService.sendEmail(sendEmailDto);
  }
}
