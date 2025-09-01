import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
	@IsEmail()
	readonly email: string;

	@IsString()
	readonly givenName: string;

	@IsString()
	readonly familyName: string;
}
