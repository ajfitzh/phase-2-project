import * as React from 'react';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShareModal from "./ShareModal"

const images = [
  {
    label: 'When I picked her up, she was in rough shape.',
    imgPath:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/rusted-harley-davidson-motorcycle-art-spectrum.jpg',
  },
  {
    label: 'I had to use my custom-built Chrome-in-ator',
    imgPath:
      'https://www.deltatechnicalcollege.com/wp-content/uploads/2018/03/DSC_0336_1.jpg',
  },
  {
    label: 'Added some elbow grease...',
    imgPath:
      'https://thumbs.dreamstime.com/z/construction-workers-working-hard-28098648.jpg',
  },
  {
    label: 'Now it looks pretty good!',
    imgPath:
      'http://media.techeblog.com/images/concept-motorcycle.jpg',
  },
];

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

export default function RecipeReviewCard({bike}) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [clicked, setClicked] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenModal = () => {
    console.log(openModal)
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleMediaClick = () => {
      console.log("Clicked!")
      handleClickOpen();
  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = pageURL => {
    setAnchorEl(null);
  };
  const setClick = (id) => {
    setClicked(!clicked)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">
            757
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
        <MenuItem onClick={handleClose}>Explode Item</MenuItem>
      </Menu>
          </div>
        }
        title={bike.projectName}
        subheader={bike.projectDate}
      />
      <CardMedia
        component="img"
        height="194"
        image= {bike.afterImg}
        alt="Before Picture"
        onClick={handleMediaClick}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {bike.bikeName} - ${bike.price}  {bike.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={setClick} aria-label="add to favorites">
        {clicked ? <FavoriteIcon sx={{ color: red[500]}} /> : <FavoriteBorderIcon /> }
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon onClick={handleClickOpenModal}/>
        </IconButton>
                
                  <ExpandMore>
                
                <IconButton>
  {<AttachMoneyIcon />}
                <Typography>{bike.price}</Typography>
  </IconButton>
              </ExpandMore>



      </CardActions>
      <div>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
          >
          <DialogContent dividers>
          <Modal images={bike.progresspics}/>
        </DialogContent>
        </BootstrapDialog>
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
