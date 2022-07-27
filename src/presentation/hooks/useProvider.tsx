import { useMemo } from "react";
import { ProviderClassReference } from "../../common/types/ClassReference";
import { ProviderInjector } from "../../core/injector/ProviderInjector";
import { useModule } from "../contexts/ModuleProvider/withModule";

export function useProvider<T extends ProviderClassReference>(providerClass: T) {
    const module = useModule();

    if (!module) {
        throw new Error(`Cannot inject ${providerClass.name} because the module was not found. Make sure that your Component is being encapsulated no withModule`);
    }

    const provider: InstanceType<T> = useMemo(() => ProviderInjector.from(module!).get(providerClass), [module, providerClass]);

    return provider;
}
