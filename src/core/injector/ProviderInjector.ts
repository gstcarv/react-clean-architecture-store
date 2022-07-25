import "reflect-metadata";
import { Container } from "inversify";
import { ClassReference, ProviderClassReference } from "../../common/types/ClassReference";
import { ProviderConfig } from "../../common/types/ProviderConfig";
import { checkIfProvider } from "./providerUtils";
import { moduleInjector } from "../moduler/Module";

export class ProviderInjector implements Injector {
    constructor(private container: Container = new Container()) {}

    static from<T>(providerClass: ClassReference<T>): ProviderInjector {
        const injectorInstance: ProviderInjector = Reflect.getMetadata(moduleInjector, providerClass);

        if (!injectorInstance) {
            throw new Error(`
                ${providerClass.name} is not a Module.
                Make sure that its class declaration has @Module decorator`);
        }

        return injectorInstance;
    }

    get<T extends ProviderClassReference>(providerClass: ProviderClassReference): InstanceType<T> {
        return this.container.get(providerClass) as InstanceType<T>;
    }

    register(providers: ProviderConfig[]) {
        providers.forEach((p) => this.bind(p));
    }

    private bind({ provider, to }: ProviderConfig) {
        if (!checkIfProvider(to)) {
            throw new Error(`
                Only implementations marked with @Provider annotation are allowed to
                join on a Module. Evaluating: ${to.name}`);
        }

        this.container.bind(provider).to(to).inSingletonScope();
    }
}

abstract class Injector {
    abstract get: <T extends ProviderClassReference>(providerClass: T) => T;
    abstract register: (providers: ProviderConfig[]) => void;
}
