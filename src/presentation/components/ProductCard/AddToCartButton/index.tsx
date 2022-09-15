import { Icon, chakra, useToast } from '@chakra-ui/react';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';
import { ProductInfo } from '../../../../modules/product/domain/models/ProductInfo';
import { useCart } from '../../../contexts/CartContext';

type Props = {
    product: ProductInfo;
};

const AddToCartButton = ({ product }: Props) => {
    const cartContext = useCart();

    const toast = useToast();

    const productInCart = cartContext.cart.some((p) => p.id === product.id);

    function handleAddProductToCart() {
        if (productInCart) {
            cartContext.removeItem(product);

            return toast({
                title: 'Product removed from the card',
                description: 'Your product was removed from the card',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }

        cartContext.addItem(product);

        return toast({
            title: 'Product added to the card',
            description: 'Your product was added to the card',
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    }

    return (
        <chakra.a cursor={'pointer'} display={'flex'} onClick={handleAddProductToCart}>
            <Icon as={!productInCart ? FiShoppingCart : FiTrash} h={5} w={5} alignSelf={'center'} />
        </chakra.a>
    );
};

export default AddToCartButton;
