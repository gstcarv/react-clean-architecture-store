import { Module } from "../../lib/moduler/Module";
import { UserService } from "./data/UserService";
import { UserDataSource } from "./domain/UserDataSource";

@Module({
    providers: [{ provider: UserDataSource, to: UserService }],
})
export class UserModule {}
