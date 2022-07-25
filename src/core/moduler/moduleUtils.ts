import { ProviderConfig } from "../../common/types/ProviderConfig";

export const checkForProviderConsistency = <T>({ provider, to }: ProviderConfig<T>) => {
    if (provider === to) {
        throw new Error(`Specified providers must not have equal refereces while registering a new Module. Evaluating: ${provider.name}`);
    }
};
