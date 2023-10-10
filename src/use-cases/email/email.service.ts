import { Injectable } from '@nestjs/common';
import * as mailgun from 'mailgun-js';
import { EmailDto } from 'src/core/dtos/email.dto';

@Injectable()
export class EmailService {
  private readonly mg;

  constructor() {
    this.mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
  }

  async sendEmail(emailDto: EmailDto) {
    const data = {
      from: 'your_email@example.com',
      to: emailDto.to,
      subject: emailDto.subject,
      text: emailDto.text,
    };

    try {
      await this.mg.messages().send(data);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
