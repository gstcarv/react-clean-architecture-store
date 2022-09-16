export type HookSpy<T extends (...args: any[]) => any> = jest.SpyInstance<ReturnType<T>>;
