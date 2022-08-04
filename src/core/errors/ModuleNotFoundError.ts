import { ProviderClassReference } from "../../common/types/ClassReference";

export class ModuleNotFoundError extends Error {
    constructor(provider: ProviderClassReference) {
        super(`Cannot inject ${provider.name} because the module was not found. Make sure that your Component is being encapsulated no withModule`);
    }
}
