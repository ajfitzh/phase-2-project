import * as React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MikeImage from "./assets/mikewife.jpg"
import CaitlinImage from "./assets/caitlin.jpg"
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Grid } from "@material-ui/core"




const Review = ({ review }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card alignItems="center" sx={{ maxWidth: 400 }}>
            <CardContent>
            <Avatar 
                style={{ marginRight: "14px" }}
                alt="C. Ustomer" 
                srcSet={review.imageURL} 
                sx={{ width: 56, height: 56 }}
                />
            <Rating readOnly precision={0.5} defaultValue={review.stars} />
            <Typography>
                {review.text}
            </Typography>
                <Typography variant="body2">{review.name}</Typography>
        </CardContent>
        </Card>
        </Grid>
    )
}

export default Review