import { useMemo } from "react";
import { ProviderClassReference } from "../../../common/types/ClassReference";
import { ModuleNotFoundError } from "../../../lib/errors/ModuleNotFoundError";
import { ProviderInjector } from "../../../lib/injector/ProviderInjector";
import { useModule } from "../../contexts/ModuleProvider/withModule";

export function useProvider<T extends ProviderClassReference>(providerClass: T) {
    const module = useModule();

    if (!module) throw new ModuleNotFoundError(providerClass);

    const provider: InstanceType<T> = useMemo(() => ProviderInjector.from(module!).get(providerClass), [module, providerClass]);

    return provider;
}
