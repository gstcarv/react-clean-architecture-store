import { HttpClient } from '../common/http/HttpClient';
import { Module } from '../lib/moduler/Module';
import { AxiosHttpClient } from '../infra/http/AxiosHttpClient';
import { Environment } from '../common/environment/Environment';
import { NodeEnvironment } from '../infra/environment/NodeEnvironment';
import { LocalStorageAdapter } from '../infra/storage/LocalStorageAdapter';
import { Storage } from '../common/storage/Storage';

@Module({
    providers: [
        { provider: HttpClient, to: AxiosHttpClient },
        { provider: Environment, to: NodeEnvironment },
        { provider: Storage, to: LocalStorageAdapter },
    ],
})
export class AppModule {}
