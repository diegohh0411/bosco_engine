import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SpaceModule } from './space/space.module';
import { ReservationModule } from './reservation/reservation.module';
import config from './app.config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.get('db.host'),
      port: config.get('db.port'),
      username: config.get('db.username'),
      password: config.get('db.password'),
      database: config.get('db.name'),
      ssl: {
        rejectUnauthorized: true,
      },

      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SpaceModule,
    ReservationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
