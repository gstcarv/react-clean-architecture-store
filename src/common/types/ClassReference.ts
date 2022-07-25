export type ClassReference<T> = new (...args: any[]) => T;

export type ProviderClassReference = abstract new (...args: any[]) => any;
