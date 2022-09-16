import { useMemo } from 'react';
import { ClassReference, ProviderClassReference } from '../../../common/types/ClassReference';
import { ModuleNotFoundError } from '../../../lib/errors/ModuleNotFoundError';
import { ProviderInjector } from '../../../lib/injector/ProviderInjector';
import { useModule } from '../../contexts/lib/ModuleProvider/withModule';

export function useProvider<T extends ProviderClassReference>(providerClass: T, fromModule?: ClassReference) {
    const module = useModule();

    if (!module && !fromModule) throw new ModuleNotFoundError(providerClass);

    const provider: InstanceType<T> = useMemo(
        () => ProviderInjector.from(fromModule || module!).get(providerClass),
        [module, providerClass, fromModule]
    );

    return provider;
}
