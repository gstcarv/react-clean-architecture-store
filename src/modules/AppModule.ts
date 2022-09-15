import { HttpClient } from '../common/http/HttpClient';
import { Module } from '../lib/moduler/Module';
import { AxiosHttpClient } from '../infra/http/AxiosHttpClient';
import { Environment } from '../common/environment/Environment';
import { NodeEnvironment } from '../infra/environment/NodeEnvironment';

@Module({
    providers: [
        { provider: HttpClient, to: AxiosHttpClient },
        { provider: Environment, to: NodeEnvironment },
    ],
})
export class AppModule {}
