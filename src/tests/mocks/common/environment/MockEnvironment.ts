import { mock } from 'jest-mock-extended';
import { Environment } from '../../../../common/environment/Environment';

export abstract class MockEnvironment {
    static create() {
        const env = mock<Environment>();

        env.get.mockReturnValue({
            apiUrl: 'http://mock-api-url.com',
        });

        return env;
    }
}
