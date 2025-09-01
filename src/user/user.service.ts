import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async create(createUserDto: CreateUserDto) {
		const existingUser = await this.userRepository.findOne({
			where: { email: createUserDto.email },
		});

		if (existingUser) {
			throw new BadRequestException("email is already in use");
		}

		const user = this.userRepository.create(createUserDto);

		return this.userRepository.save(user);
	}

	async findOneByEmail(email: string) {
		return await this.userRepository.findOne({ where: { email } });
	}
}
