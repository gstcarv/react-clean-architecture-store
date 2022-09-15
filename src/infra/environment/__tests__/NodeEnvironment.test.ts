import { EnvironmentVariables } from '../../../common/environment/EnvironmentVariables';
import { NodeEnvironment } from '../NodeEnvironment';

describe('NodeEnvironment', () => {
    let nodeEnvironment: NodeEnvironment;

    function setup() {
        process.env.REACT_APP_BASE_SERVER_URL = 'mock-base-url';

        nodeEnvironment = new NodeEnvironment();
    }

    beforeEach(() => setup());

    describe('get', () => {
        test('it should return environment from node process', async () => {
            const result = nodeEnvironment.get();

            expect(result).toStrictEqual({
                apiUrl: 'mock-base-url',
            } as EnvironmentVariables);
        });
    });
});
