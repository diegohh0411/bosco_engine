import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Space {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    name: string;
}