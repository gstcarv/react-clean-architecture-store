import { Module } from "../../core/moduler/Module";
import { AuthService } from "./data/AuthService";
import { AuthDataSource } from "./domain/AuthDataSource";

@Module({
    providers: [{ provider: AuthDataSource, to: AuthService }],
})
export class AuthModule {}
