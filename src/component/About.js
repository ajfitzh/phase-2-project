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
        name: "Garage",
        imageURL: "https://i.imgur.com/bEQ0IHl.jpeg"
    },
    {
        name: "My next project!",
        imageURL: "https://i.imgur.com/Wl9WbMX.jpeg"
    },
    {
        name: "Nice and dry inside.",
        imageURL: "https://i.imgur.com/EWcT7F4.jpeg"
    },
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
        <Card>
            <CardMedia
        component="img"
        srcSet= {props.item.imageURL}
        alt={props.item.name}
            />
        </Card>
    )
}
    return (
        <div>
           <Card align="center">
                <Carousel>
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
               <div className="font-link">
               <h1> Founded in 2021, built upon decades of experience <br></br> We guarantee <br></br> craftsmanship, attention to detail, and innovation. <br></br>
                 -Mike
                </h1>
                </div>
            </Card>
            <Typography align="center" gutterBottom variant="h2">Our Customer Stories</Typography>
           <Grid container container spacing={2}>
           {reviews.map(review => <Review key={review.id} review={review}/>)} 
            </Grid>
            <br></br>
            <ReviewForm onAddReview={onAddReview}/>
        </div>    
    )
}

export default About
