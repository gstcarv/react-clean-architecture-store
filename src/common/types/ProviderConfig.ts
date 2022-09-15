import { ClassReference, ProviderClassReference } from './ClassReference';

export type ProviderConfig<T = unknown> = {
    provider: ProviderClassReference;
    to: ClassReference<any>;
};
