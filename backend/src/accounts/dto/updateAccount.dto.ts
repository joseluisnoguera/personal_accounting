import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator'

export class UpdateAccountDto {
  @IsNumber()
  @IsOptional()
  id: number

  @IsString({ each: true })
  @IsNotEmpty()
  username: string

  @IsEmail()
  @IsNotEmpty()
  email: string
}
