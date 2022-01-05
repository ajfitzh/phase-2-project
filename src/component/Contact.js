import React from "react";
import MapContainer from "./MapComponent"
import Typography from "@material-ui/core/Typography";
import Logo from "./assets/logo.png"
import Button from '@material-ui/core/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from "@material-ui/core"
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';


const Contact = props => {
  
    return (
<div>
  <MapContainer />
  <Typography align="center" gutterBottom variant="h4">Mike's Bikes 757, Inc.</Typography>
  <Grid container justifyContent="center">
    <Avatar sx={{ width: 100, height: 100 }}align="center" src={Logo} />
    </Grid>
  <Typography align="center" gutterBottom variant="h5">Virginia Beach, Virginia</Typography>
  <Grid container justifyContent="center">
  <IconButton>
  <a href="https://www.facebook.com/marketplace/profile/100044500240787/?ref=permalink">
    <FacebookIcon color="primary" />
  </a>
  </IconButton>
  <IconButton>
    <a href="">
    <TwitterIcon color="primary" />
    </a>
  </IconButton>
  <IconButton>
    <a href="https://www.linkedin.com/in/austin-fitzhugh-3b8a35a4/">
    <LinkedInIcon color="primary" />
    </a>
  </IconButton>
  <IconButton>
  <a href="mailto:austin.j.fitzhugh@gmail.com">
  <EmailIcon/>  
  </a>
  </IconButton>
  </Grid>
  <Typography align="center" gutterBottom variant="h4">Want a Custom Bike? </Typography>

  <Grid container justifyContent="center">
    <a href="tel:~15408093106">
   <Button align="center" variant="contained" color="primary" endIcon={<LocalPhoneIcon/>}>Call Mike!</Button>
   </a>
   </Grid>


</div>
  )};

export default Contact;



