import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
    base = "BASE",
    coordinator = "COOR",
    admin = "ADMN"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    given_name: string;

    @Column()
    family_name: string;

    @Column()
    email: string;

    @Column({ enum: UserRole, default: UserRole.base })
    role: UserRole;
}