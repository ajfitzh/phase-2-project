import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "./honda500/pic1.jpg"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">
            757
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Honda 500 Project"
        subheader="June-July 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image= {Image}
        alt="Before Picture"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        1981 Honda gl500 - $500  non-running condition. 
        When I first got this bike, it was in overall good condition missing only a few needed parts to make complete.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>The Journey:</Typography>
          <Typography paragraph>
            I added inverse reactive current to the forward rotor, for use in unilateral phase detractors, but would also be capable of automatically synchronizing cardinal grammeters. 
          </Typography>
          <Typography paragraph>
            Then I spent two months rotating the side couplers. Now, basically the only new principle involved is that instead of power being generated by the relative motion of conductors and fluxes, it’s produced by the modial interaction of magneto-reluctance and capacitive diractance. The original machine had a base plate of prefabulated amulite, surmounted by a malleable logarithmic casing in such a way that the two spurving bearings were in a direct line with the panametric fan.
          </Typography>
          <Typography paragraph>
            See the new model here!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
