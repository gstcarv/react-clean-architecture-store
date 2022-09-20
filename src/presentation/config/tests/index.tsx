import { render as defaultRender } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { ClassReference } from '../../../common/types/ClassReference';
import withModule from '../../contexts/lib/ModuleProvider/withModule';
import '../../../modules/AppModule';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

type RenderOptions = {
    module?: ClassReference;
};

export function render(element: ReactElement<any, any>, options?: RenderOptions) {
    const MockTestProviders = ({ children }: PropsWithChildren) => (
        <MemoryRouter>
            <Routes>
                <Route path='/' element={element} />
            </Routes>
        </MemoryRouter>
    );

    if (options?.module) {
        const WithModule = withModule(options.module)(() => element);

        return defaultRender(
            <MockTestProviders>
                <WithModule />
            </MockTestProviders>
        );
    }

    return defaultRender(<MockTestProviders>{element}</MockTestProviders>);
}
