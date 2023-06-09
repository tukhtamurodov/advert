import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';

export class CreateAdvertDto {
  @ApiProperty({
    example: 4000,
  })
  @IsNotEmpty()
  @IsNumberString()
  sell: number;
  @ApiProperty({
    example: 4000,
  })
  @IsNumberString()
  @IsNotEmpty()
  buy: number;
  @ApiProperty({
    example: 'http://localhost:7796/api-docs',
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
