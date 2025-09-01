import { BaseEntity } from "src/shared/entities/base.entity";
import { Space } from "src/space/entities/space.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity()
export class Reservation extends BaseEntity {
    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Space)
    space: Space;

    @Column('timestamp')
    start_time: Date;

    @Column('timestamp')
    end_time: Date;
}