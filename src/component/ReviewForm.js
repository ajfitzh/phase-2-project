import Typography from "@material-ui/core/Typography";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import * as React from 'react';
import HoverRating from "./HoverRating"

function ReviewForm({ onAddReview }) {
  
  
  return (
        <HoverRating onAddReview={onAddReview}/>
  );
}

export default ReviewForm