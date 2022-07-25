import { HttpClient } from "../common/http/HttpClient";
import { Module } from "../core/moduler/Module";
import { AxiosHttpClient } from "../infra/http/AxiosHttpClient";

@Module({
    providers: [{ provider: HttpClient, to: AxiosHttpClient }],
})
export class AppModule {}
