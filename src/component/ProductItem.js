import * as React from 'react';
import {useState} from 'react';
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
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "./honda500/pic1.jpg"
import Modal from "./Modal"
import { stripHtml } from 'string-strip-html';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareModal from "./ShareModal"
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from '@mui/material/Button';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};


const ExpandMore = styled((props) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
}),
}));


const ProductItem = ({ product, onAddToCart }) => {
  const [openModal, setOpenModal] = useState(false);
  const [clicked, setClicked] = useState(false)

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const handleClickOpenModal = () => {
    console.log(openModal)
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const setClick = (id) => {
    setClicked(!clicked)
  }
    const { result } = stripHtml(product.description);

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
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
          <div>
     <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Add Stuff</MenuItem>
        <MenuItem onClick={handleClose}>Sync with account</MenuItem>
        <MenuItem onClick={handleClose}>Explode</MenuItem>
      </Menu>
          </div>
        }
        title={product.name}
        subheader={result}
      />
      <div>
    </div>
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
        <IconButton onClick={setClick} aria-label="add to favorites">
        {clicked ? <FavoriteIcon sx={{ color: red[500]}} /> : <FavoriteBorderIcon /> }
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon onClick={handleClickOpenModal}/>
        </IconButton>
        <IconButton>
        <AddShoppingCartIcon onClick={handleAddToCart}/>
        </IconButton>
      </CardActions>
      <div>
        <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogContent dividers>
        <ShareModal />
        </DialogContent>
      </BootstrapDialog>
    </div>
    </Card>
    
  );
}
export default ProductItem;
