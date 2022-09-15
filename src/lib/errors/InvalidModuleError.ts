import { ProviderClassReference } from "../../common/types/ClassReference";

export class InvalidModuleError extends Error {
    constructor(module: ProviderClassReference) {
        super(`${module.name} is not a Module. Make sure that its class declaration has @Module decorator`);
    }
}
