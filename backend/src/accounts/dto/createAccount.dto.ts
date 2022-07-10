import { IsString, IsNotEmpty, IsEmail } from 'class-validator'

export class CreateAccountDto {
  @IsString({ each: true })
  @IsNotEmpty()
  username: string

  @IsEmail()
  @IsNotEmpty()
  email: string
}
