import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "./honda500/pic1.jpg"
import Modal from "./Modal"
import { stripHtml } from 'string-strip-html';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@material-ui/core/Button";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
    const navigate = useNavigate();
  const handleEmptyCart = () => {
    onEmptyCart();
  }

const handleButtonClick = (pageURL) => {
        navigate(pageURL);
      };
      
  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      }

      return (
        <Typography className="cart__none">
          You have no items in your shopping cart, start adding some!
        </Typography>
      );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
        <CartItem
          item={lineItem}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          key={lineItem.id}
          className="cart__inner"
        />
    ))
)

  const renderTotal = () => (
      <div className="cart__total">
          <Typography className="cart__total-title">Subtotal:</Typography>
          <Typography className="cart__total-price">{cart.subtotal.formatted_with_symbol}</Typography>
      </div>
  )


  return (
    <div className="cart">
      <Typography gutterBottom variant="h2" className="cart__heading">Your Shopping Cart</Typography>
      { renderEmptyMessage() }
      { renderItems() }
      { renderTotal() }
      <div className="cart__footer">
        <Button color="secondary" variant="contained" endIcon={<RemoveShoppingCartIcon/>} className="cart__btn-empty" onClick={handleEmptyCart}>Empty cart</Button>
        <Button color="primary" variant="contained" endIcon={<ShoppingCartCheckoutIcon/>} onClick={() => handleButtonClick("/checkout")} className="cart__btn-checkout">Checkout</Button> 
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};