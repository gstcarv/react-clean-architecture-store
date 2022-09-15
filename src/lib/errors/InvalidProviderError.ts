import { ProviderClassReference } from "../../common/types/ClassReference";

export class InvalidProviderError extends Error {
    constructor(provider: ProviderClassReference) {
        super(`Only implementations marked with @Provider annotation are allowed to join on a Module. Evaluating: ${provider.name}`);
    }
}
