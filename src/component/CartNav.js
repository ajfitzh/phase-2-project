import React, {useState} from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, CardActionArea } from "@mui/material";

library.add(faShoppingBag, faTimes);

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);

//     <Badge badgeContent={4} color="secondary">
//     <ShoppingCartIcon />
//   </Badge>
    return (
        <div className="nav">
            <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
                {!isCartVisible ? (
                <button className="nav__cart-open">
                 <Badge badgeContent={cart.total_items} color="secondary">
                    <ShoppingCartIcon size="2x" icon="shopping-bag" color="#292B83"/>
                    </Badge>
                </button>
                ) : (
                    <button className="nav__cart-close">
                    <ShoppingCartIcon size="1x" icon="times" color="white"/>
                    </button>
                )}
            </div>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }  
        </div>
    )
}

export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};