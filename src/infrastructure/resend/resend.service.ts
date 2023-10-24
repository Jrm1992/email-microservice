import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { EmailDto } from 'src/application/email/email.dto';
import { LoggerService } from 'src/application/logger/logger.service';

@Injectable()
export class ResendService {
  constructor(private readonly logger: LoggerService) {}

  resend = new Resend(process.env.RESEND_API_KEY);

  async sendEmail(emailDto: EmailDto) {
    const data: any = await this.resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: emailDto.to,
      subject: emailDto.subject,
      html: emailDto.text,
    });

    if (data.statusCode == 422) {
      this.logger.error(data.message, 'validation_error');

      throw new HttpException(data.message, HttpStatus.BAD_REQUEST);
    }

    if (data.id) {
      this.logger.log('email sent');
      return {
        stausCode: 200,
        message: 'email sent',
      };
    }

    return {
      stausCode: 500,
      message: 'Somenthing went wrong',
    };
  }
}
