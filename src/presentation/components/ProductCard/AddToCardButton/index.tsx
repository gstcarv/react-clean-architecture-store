import { Icon, chakra } from '@chakra-ui/react';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';
import { ProductInfo } from '../../../../modules/product/domain/models/ProductInfo';
import { useCart } from '../../../contexts/CartContext';

type Props = {
    product: ProductInfo;
};

const AddToCardButton = ({ product }: Props) => {
    const cartContext = useCart();

    const productInCart = cartContext.cart.some((p) => p.id === product.id);

    function handleAddProductToCard() {
        if (productInCart) {
            return cartContext.removeItem(product);
        }

        cartContext.addItem(product);
    }

    return (
        <chakra.a cursor={'pointer'} display={'flex'} onClick={handleAddProductToCard}>
            <Icon as={!productInCart ? FiShoppingCart : FiTrash} h={5} w={5} alignSelf={'center'} />
        </chakra.a>
    );
};

export default AddToCardButton;
