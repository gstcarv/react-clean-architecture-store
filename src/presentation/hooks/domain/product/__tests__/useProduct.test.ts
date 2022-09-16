import { renderHook, waitFor } from '@testing-library/react';
import { mock } from 'jest-mock-extended';
import { ProductDataSource } from '../../../../../modules/product/domain/ProductDataSource';
import { createHookWrapper } from '../../../../../tests/helpers/hooks/createHookWrapper';
import { HookSpy } from '../../../../../tests/helpers/types/HookSpy';
import { ProductInfoMock } from '../../../../../tests/mocks/models/product/ProductInfoMock';
import { useProducts } from '../useProduct';
import * as ProductProviderHooks from '../useProductProvider';

describe('useProduct', () => {
    const mockProductDataSource = mock<ProductDataSource>();

    let spyProductProvider: HookSpy<typeof ProductProviderHooks.useProductDataSource>;

    function setup() {
        spyProductProvider = jest
            .spyOn(ProductProviderHooks, 'useProductDataSource')
            .mockReturnValue(mockProductDataSource);
    }

    beforeEach(() => setup());

    afterAll(() => spyProductProvider.mockRestore());

    describe('useProducts', () => {
        test('it should return data when fetch success', async () => {
            mockProductDataSource.getAll.mockResolvedValueOnce(ProductInfoMock.createList());

            const { result } = renderHook(() => useProducts(), {
                wrapper: createHookWrapper(),
            });

            expect(result.current.isLoading).toBeTruthy();

            await waitFor(() => expect(result.current.isLoading).toBeFalsy());

            expect(result.current.data).toStrictEqual(ProductInfoMock.createList());
        });

        test('it should return error when fetch error', async () => {
            mockProductDataSource.getAll.mockRejectedValueOnce('mock-error-message');

            const { result } = renderHook(() => useProducts(), {
                wrapper: createHookWrapper(),
            });

            await waitFor(() => expect(result.current.error).toBeTruthy());

            expect(result.current.error).toStrictEqual('mock-error-message');
        });
    });
});
