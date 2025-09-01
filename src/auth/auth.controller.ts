import { Controller, Get, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get("token")
	async requestToken(@Query("email") email: string) {
		return this.authService.requestTokenGeneration(email);
	}
}
