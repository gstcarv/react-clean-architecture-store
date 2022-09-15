import { ProviderClassReference } from "../../common/types/ClassReference";

export class DuplicatedProviderReferencesError extends Error {
    constructor(provider: ProviderClassReference) {
        super(`Specified providers must not have equal refereces while registering a new Module. Evaluating: ${provider.name}`);
    }
}
