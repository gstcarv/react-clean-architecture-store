import { Environment } from '../../common/environment/Environment';
import { EnvironmentVariables } from '../../common/environment/EnvironmentVariables';
import { Provider } from '../../lib/injector/Provider';

@Provider()
export class NodeEnvironment implements Environment {
    get(): EnvironmentVariables {
        return {
            apiUrl: process.env.REACT_APP_BASE_SERVER_URL!,
        };
    }
}
