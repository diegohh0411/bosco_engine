import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "./app.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ReservationModule } from "./reservation/reservation.module";
import { SpaceModule } from "./space/space.module";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: config.get("db.host"),
			port: config.get("db.port"),
			username: config.get("db.username"),
			password: config.get("db.password"),
			database: config.get("db.name"),
			ssl: {
				rejectUnauthorized: true,
			},

			autoLoadEntities: true,
			synchronize: true,
		}),
		UserModule,
		SpaceModule,
		ReservationModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
