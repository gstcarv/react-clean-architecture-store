import { EnvironmentVariables } from './EnvironmentVariables';

export abstract class Environment {
    abstract get(): EnvironmentVariables;
}
