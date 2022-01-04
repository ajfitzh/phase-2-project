import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField'



const labels = {
  0.5: 'srsly',
  1: 'Awful',
  1.5: 'Terrible',
  2: 'Poor',
  2.5: 'Ok',
  3: 'Average',
  3.5: 'Good',
  4: 'Great',
  4.5: 'Excellent',
  5: 'Go Mike!',
};

export default function HoverRating({onAddReview}) {
  const [value, setValue] = React.useState(2);
  const [reviewText, setReviewText] = React.useState('')
  const [hover, setHover] = React.useState(-1);

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: "You",
      imageURL:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fimages%2Fmotorbike-drawing-outline-18.jpg&f=1&nofb=1",
      text: {reviewText},
      stars: {value}
      }
      console.log(itemData)
  //   fetch("https://boiling-falls-26905.herokuapp.com/reviews", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(itemData),
  //   })
  //     .then((r) => r.json())
  //     .then((newItem) => onAddReview(newItem));
  }

  return (
    <Card align="center">
      <Typography>Worked with Mike? Submit a Review!</Typography>
      <TextField value={reviewText} onChange={e => setReviewText(e.target.value)} id="standard-basic" label="Type here..." variant="standard" />
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignitems: 'center',
      }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box> 
    <Button align="center" color="primary" variant="contained" onClick={handleSubmit}> Submit Review</Button>
    </Card>
  );
}
