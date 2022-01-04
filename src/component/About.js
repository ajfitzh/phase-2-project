import React, {useState, useEffect } from 'react'
import ReviewForm from "./ReviewForm"
import Review from "./Review"
import mikedog from "./assets/mikedog.png"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

const About = props => {
    const [reviews, setReviews] = useState([])
    const classes = useStyles();

    useEffect(()=>{
        fetch('https://boiling-falls-26905.herokuapp.com/reviews')
        .then((r) => r.json())
        .then((reviews) => setReviews(reviews))
      }, []);   

      function onAddReview(newReview){
          setReviews([...reviews,newReview])
      }
    return (
        <div>
            
            <Typography align="center" gutterBottom variant="h2">Our Story</Typography>
           
            <Typography align="center" gutterBottom variant="h2">Our Customer Stories</Typography>
           <Grid container justifyContent="center" container spacing={12} row spacing={12}>
           {reviews.map(review => <Review key={review.id} text={review.text}/>)} 
            </Grid>
            <ReviewForm onAddReview={onAddReview}/>
        </div>    
    )
}

export default About
