import "reflect-metadata";
import { ClassReference } from "../../common/types/ClassReference";
import { ProviderConfig } from "../../common/types/ProviderConfig";
import { ProviderInjector } from "../injector/ProviderInjector";
import { checkForProviderConsistency } from "./moduleUtils";

export const moduleInjector = Symbol("injector");

export function Module<T>(config: ModuleDefinitionConfig<T>) {
    return <T>(target: ClassReference<T>) => {
        config.providers.forEach(checkForProviderConsistency);

        const injector = new ProviderInjector();
        injector.register(config.providers);

        Reflect.defineMetadata(moduleInjector, injector, target);
    };
}

export type ModuleDefinitionConfig<T> = {
    providers: ProviderConfig<T>[];
};
