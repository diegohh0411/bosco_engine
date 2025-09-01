import { Injectable, NotFoundException } from "@nestjs/common";
import { randomInt } from "crypto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	genRandomToken() {
		return randomInt(100000, 1000000).toString();
	}

	async requestTokenGeneration(email: string) {
		const user = await this.userService.findOneByEmail(email);

		if (user) {
			const token = this.genRandomToken();
			console.log({ token });
		} else {
			throw new NotFoundException();
		}
	}
}
