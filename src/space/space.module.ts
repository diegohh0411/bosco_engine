import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from './entities/space.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Space
        ])
    ]
})
export class SpaceModule {}
