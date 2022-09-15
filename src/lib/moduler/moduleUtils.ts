import { ProviderConfig } from "../../common/types/ProviderConfig";
import { DuplicatedProviderReferencesError } from "../errors/DuplicatedProviderReferencesError";

export const checkForProviderConsistency = <T>({ provider, to }: ProviderConfig<T>) => {
    if (provider === to) {
        throw new DuplicatedProviderReferencesError(provider);
    }
};
