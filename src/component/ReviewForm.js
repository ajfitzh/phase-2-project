import Typography from "@material-ui/core/Typography";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import * as React from 'react';
import HoverRating from "./HoverRating"

function ReviewForm({ onAddReview }) {
  

function handleSubmit(e) {
  e.preventDefault();
  const itemData = {
    text: e.target.name.value,
    }
  fetch("https://boiling-falls-26905.herokuapp.com/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddReview(newItem));
}

  
  return (
    <Card>
      <Typography>Add Your Own!</Typography>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Add Review" />
        <button type="submit">Add Review</button>
      </form>
    <HoverRating/>
   </Card>
  );
}

export default ReviewForm