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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "./honda500/pic1.jpg"
import Modal from "./Modal"
import { stripHtml } from 'string-strip-html';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductItem = ({ product, onAddToCart }) => {

    const { result } = stripHtml(product.description);

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  }

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">
            757
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader={result}
      />
      <CardMedia
        component="img"
        height="194"
        image= {product.image.url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {result}
        </Typography>
        <Typography>
          {product.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton>
        <AddShoppingCartIcon onClick={handleAddToCart}/>
        </IconButton>
      </CardActions>
    </Card>
    
  );
}
export default ProductItem;
