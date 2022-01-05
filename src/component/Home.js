import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MikeImage from "./assets/mikewife.jpg"
import Logo from "./assets/logo.png"




const Home = props => {


  return <div> 
  <Card>    
      <Typography gutterBottom variant="h2" color="textPrimary" align="center">Hi, I'm Mike.</Typography>
  <CardMedia
        component="img"
        srcSet= {MikeImage}
        alt="Mike with Wife"
      />
    <Typography align="center" gutterBottom variant="h5"> I give bikes new life at my restoration shop in Virginia Beach, VA.</Typography>
    <CardMedia
      component="img"
      srcSet= {Logo}
      alt="Mike's Bikes Logo"
      />
  <Typography align="center" gutterBottom variant="h6">Let's get to work!</Typography></Card>
  
  </div>;
};

export default Home;