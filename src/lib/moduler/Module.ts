import 'reflect-metadata';
import { ClassReference } from '../../common/types/ClassReference';
import { ProviderConfig } from '../../common/types/ProviderConfig';
import { Injector } from '../injector/ProviderInjector';
import { checkForProviderConsistency } from './moduleUtils';

export const moduleInstance = Symbol('injector');

export type ModuleDefinitionConfig<T> = {
    providers: ProviderConfig<T>[];
    merge?: ClassReference[];
};

export function Module<T>(config: ModuleDefinitionConfig<T>) {
    return <T>(target: ClassReference<T>) => {
        config.providers?.forEach(checkForProviderConsistency);

        const moduleContainer = target.name === 'AppModule' ? Injector.base : Injector.registerModule();
        moduleContainer.register(...config.providers);

        if (config.merge?.length) {
            moduleContainer.mergeModules(...config.merge);
        }

        Reflect.defineMetadata(moduleInstance, moduleContainer, target);
    };
}
