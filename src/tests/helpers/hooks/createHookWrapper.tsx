import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export function createHookWrapper() {
    return ({ children }: PropsWithChildren) => <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
}
