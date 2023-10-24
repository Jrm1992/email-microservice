import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({
    example: 'recipient@example.com',
    description: 'Email recipient',
  })
  to: string;

  @ApiProperty({
    example: 'Subject of the email',
    description: 'Email subject',
  })
  subject: string;

  @ApiProperty({
    example: 'This is the email body text.',
    description: 'Email body text',
  })
  text: string;
}
