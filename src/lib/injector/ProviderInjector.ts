import 'reflect-metadata';
import { container as depsContainer, DependencyContainer, InjectionToken } from 'tsyringe';
import { ClassReference, ProviderClassReference } from '../../common/types/ClassReference';
import { ProviderConfig } from '../../common/types/ProviderConfig';
import { checkIfProvider } from './providerUtils';
import { moduleInstance } from '../moduler/Module';
import { InvalidModuleError } from '../errors/InvalidModuleError';
import { InvalidProviderError } from '../errors/InvalidProviderError';

export class ProviderInjector implements Injector {
    constructor(private container: DependencyContainer = depsContainer) {}

    private bindedServices: ProviderConfig[] = [];

    static from<T>(moduleClass: ClassReference<T>): ProviderInjector {
        const injectorInstance: ProviderInjector = Reflect.getMetadata(moduleInstance, moduleClass);

        if (!injectorInstance) {
            throw new InvalidModuleError(moduleClass);
        }

        return injectorInstance;
    }

    get<T extends ProviderClassReference>(providerClass: ProviderClassReference): InstanceType<T> {
        return this.container.resolve(providerClass as InjectionToken<T>) as InstanceType<T>;
    }

    register(...providers: ProviderConfig[]) {
        providers.forEach((p) => this.bind(p));
    }

    private bind({ provider, to }: ProviderConfig) {
        if (!checkIfProvider(to)) {
            throw new InvalidProviderError(to);
        }

        type ClazzType = typeof to;

        this.bindedServices.push({ provider, to });
        this.container.register<ClazzType>(provider as InjectionToken<ClazzType>, { useClass: to });
    }

    createChild(): ProviderInjector {
        return new ProviderInjector(this.container);
    }

    mergeModules(...modules: ClassReference<any>[]) {
        modules.forEach((moduleClass) => {
            const moduleInstance = ProviderInjector.from(moduleClass);
            this.register(...moduleInstance.bindedServices);
        });
    }
}

export abstract class Injector {
    static base = new ProviderInjector();

    static registerModule(moduleInjector: ProviderInjector = Injector.base): ProviderInjector {
        return moduleInjector.createChild();
    }

    abstract get: <T extends ProviderClassReference>(providerClass: T) => T;
    abstract register: (...providers: ProviderConfig[]) => void;
    abstract mergeModules: (...modules: ClassReference[]) => void;
}
