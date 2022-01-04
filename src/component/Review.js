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

const Review = ({ text }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader>
                Customer A.
                
            </CardHeader>
            <Rating readOnly precision={0.5} defaultValue={5} />
            <Typography>
                {text}
            </Typography>
            <Avatar style={{ justifyContent: "flex-end", display: "flex" }} align="center" alt="C. Ustomer" srcSet={CaitlinImage} sx={{ width: 56, height: 56 }}/>
        </Card>
    )
}

export default Review
