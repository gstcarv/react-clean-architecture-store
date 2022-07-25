import { Module } from "../../core/moduler/Module";
import { UserService } from "./data/UserService";
import { UserDataSource } from "./domain/UserDataSource";

@Module({
    providers: [{ provider: UserDataSource, to: UserService }],
})
export class UserModule {}
