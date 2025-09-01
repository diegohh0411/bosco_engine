import { Token } from "src/auth/entities/token.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
	Base = "BASE",
	Coordinator = "COOR",
	Admin = "ADMN",
}

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	givenName: string;

	@Column()
	familyName: string;

	@Column({ unique: true })
	email: string;

	@Column({ enum: UserRole, default: UserRole.Base })
	role: UserRole;

	@OneToOne(
		() => Token,
		(token) => token.user,
	)
	token: Token;
}
