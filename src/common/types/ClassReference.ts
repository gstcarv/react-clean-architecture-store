export type ClassReference<T = any> = new (...args: any[]) => T;

export type ProviderClassReference = abstract new (...args: any[]) => any;
