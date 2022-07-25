import { HttpClient } from "../../common/http/HttpClient";
import { Module } from "../../core/moduler/Module";
import { AxiosHttpClient } from "../../infra/http/AxiosHttpClient";
import { AuthService } from "./data/AuthService";
import { AuthDataSource } from "./domain/AuthDataSource";

@Module({
    providers: [
        { provider: HttpClient, to: AxiosHttpClient },
        { provider: AuthDataSource, to: AuthService },
    ],
})
export class AuthModule {}
