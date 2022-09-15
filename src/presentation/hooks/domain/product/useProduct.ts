import useSWR from 'swr';
import { ProductInfo } from '../../../../modules/product/domain/models/ProductInfo';
import { FetchHookReturn } from '../../types/FetchHookReturn';
import { useProductDataSource } from './useProductProvider';

export const useProducts = (): FetchHookReturn<ProductInfo[]> => {
    const productDataSource = useProductDataSource();

    const { data, error, isValidating } = useSWR('products', () => productDataSource.getAll());

    return {
        data,
        error,
        isLoading: !data && isValidating,
    };
};
