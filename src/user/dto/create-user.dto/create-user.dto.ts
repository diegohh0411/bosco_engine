import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly given_name: string;

    @IsString()
    readonly family_name: string;
}
