import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
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

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

	const handleUpdateCartQty = (lineItemId, quantity) => {
		onUpdateCartQty(lineItemId, quantity);
	}

	const handleRemoveFromCart = () => {
		onRemoveFromCart(item.id);
	}


	return (
    <Card sx={{ maxWidth: 500 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[100] }} aria-label="recipe">
          mkt
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={item.name}
      subheader=""
    />
    <CardMedia
      component="img"
      height="194"
      image= {item.image.url}
      alt={item.name}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      ""
      </Typography>
      <Typography>
        Total Price: {item.line_total.formatted_with_symbol}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="share">
        <AddIcon onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}/>
      </IconButton> 
      <Avatar>{item.quantity}</Avatar>
     <IconButton aria-label="add to favorites">
        <RemoveIcon onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}/>
      </IconButton>
      <IconButton>
      <DeleteIcon onClick={handleRemoveFromCart}/>
      </IconButton>
    </CardActions>
    </Card>
	);
};
export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {}
 };