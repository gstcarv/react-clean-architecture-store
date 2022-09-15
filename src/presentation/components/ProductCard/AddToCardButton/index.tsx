import { Icon, chakra } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { ProductInfo } from '../../../../modules/product/domain/models/ProductInfo';
import { useCart } from '../../../contexts/CartContext';

type Props = {
    product: ProductInfo;
};

const AddToCardButton = ({ product }: Props) => {
    const cart = useCart();

    function handleAddProductToCard() {
        cart.addItem(product);
    }

    return (
        <chakra.a href={'#'} display={'flex'} onClick={handleAddProductToCard}>
            <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
        </chakra.a>
    );
};

export default AddToCardButton;
