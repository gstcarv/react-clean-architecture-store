import '../../../../modules/AppModule';
import { renderHook } from '@testing-library/react';
import { ModuleNotFoundError } from '../../../../lib/errors/ModuleNotFoundError';
import withModule from '../../../contexts/lib/ModuleProvider/withModule';
import { useProvider } from '../useProvider';
import { AppModule } from '../../../../modules/AppModule';
import { HttpClient } from '../../../../common/http/HttpClient';
import { ProductModule } from '../../../../modules/product/ProductModule';
import { ProductDataSource } from '../../../../modules/product/domain/ProductDataSource';

describe('useProvider', () => {
    test('It should return correct implementation when UserDataSource abstraction provided on params', () => {
        const wrapper = ({ children }: any) => <>{children}</>;

        const withUserModule = withModule(ProductModule)(wrapper);

        const { result } = renderHook(() => useProvider(ProductDataSource), {
            wrapper: withUserModule,
        });

        expect(result.current.getAll).toBeInstanceOf(Function);
    });

    test('It should return correct implementation when HttpClient abstraction provided on params', () => {
        const wrapper = ({ children }: any) => <>{children}</>;

        const withAppModule = withModule(AppModule)(wrapper);

        const { result } = renderHook(() => useProvider(HttpClient), {
            wrapper: withAppModule,
        });

        expect(result.current.get).toBeInstanceOf(Function);
    });

    test('It should thrown error if no module provided', () => {
        const spyConsole = jest.spyOn(console, 'error').mockImplementation();

        try {
            const { result } = renderHook(() => {
                useProvider(ProductDataSource, undefined);
            });
            expect(result.current).toBe(undefined);
        } catch (err) {
            expect(err).toEqual(new ModuleNotFoundError(ProductDataSource));
        }

        spyConsole.mockRestore();
    });

    test('It should allow manually pass module into parameters', () => {
        const { result } = renderHook(() => useProvider(ProductDataSource, ProductModule));

        expect(result.current.getAll).toBeInstanceOf(Function);
    });
});
