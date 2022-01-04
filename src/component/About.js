import React, {useState, useEffect } from 'react'
import ReviewForm from "./ReviewForm"
import Review from "./Review"
import mikedog from "./assets/mikedog.png"
import mikewife from "./assets/mikewife.jpg"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Grid } from "@material-ui/core"
import "./About.css"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

var items = [
    {
        name: "Random Name #1",
        imageURL: "https://www.familyhandyman.com/wp-content/uploads/2017/06/FH06SEP_MOTORC_01-2.jpg"
    },
    {
        name: "Random Name #2",
        imageURL: "http://ridermagazine.com/wp-content/uploads/2018/07/LEADIMG_3598.jpg"
    }
]

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

      function Item(props)
{
    return (
        <Paper>
            <p>{props.item.name}</p>
            <img width="60%" height="400vw" src={props.item.imageURL}/>
        </Paper>
    )
}
    return (
        <div>
            
            <Typography align="center" gutterBottom variant="h4">Our Story</Typography>
           <Card align="center">
                <Carousel>
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
               <div className="font-link">
               <h1> Founded in 2021, built upon decades of experience <br></br> and a brand-new workshop.<br></br> We guarantee <br></br> craftsmanship, attention to detail, and innovation. <br></br>
                 -Mike M.
                </h1>
                </div>
            </Card>
            <Typography align="center" gutterBottom variant="h2">Our Customer Stories</Typography>
           <Grid container justifyContent="center" container spacing={12} row spacing={12}>
           {reviews.map(review => <Review key={review.id} text={review.text}/>)} 
            </Grid>
            <ReviewForm onAddReview={onAddReview}/>
        </div>    
    )
}

export default About
