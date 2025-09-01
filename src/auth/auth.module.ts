import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Token } from "./entities/token.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Token]), UserModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
