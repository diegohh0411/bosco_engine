import { BaseEntity } from "src/shared/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class Token extends BaseEntity {
	@Column()
	hashedToken: string;

	@OneToOne(
		() => User,
		(user) => user.token,
	)
	user: User;
}
