import "reflect-metadata";
import { ClassReference } from "../../common/types/ClassReference";
import { ProviderConfig } from "../../common/types/ProviderConfig";
import { Injector } from "../injector/ProviderInjector";
import { checkForProviderConsistency } from "./moduleUtils";

export const moduleInstance = Symbol("injector");

export type ModuleDefinitionConfig<T> = {
    providers: ProviderConfig<T>[];
};

export function Module<T>(config: ModuleDefinitionConfig<T>) {
    return <T>(target: ClassReference<T>) => {
        config.providers?.forEach(checkForProviderConsistency);

        const moduleContainer = target.name === "AppModule" ? Injector.base : Injector.registerModule();
        moduleContainer.register(...config.providers);

        Reflect.defineMetadata(moduleInstance, moduleContainer, target);
    };
}
