import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import litho from './litho.jpeg'



const useStyles = makeStyles({
  root: {
    
   
    border: '2px solid grey',    
    maxWidth: 345,
    boxShadow: "5px 5px 10px #888888",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (


    <div class="container" style={{marginTop:"20px"}}>
                                                  

    <div class="LITHOPHANES">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image src={litho.jpeg}
          title="Lithophanes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          LITHOPHANES
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sometimes perspective necessitates technique! Lithophanes are unique in their own way. 
          They preserve your memories to be recalled as and when you like. At Product Hub 3D we
           provide the best quality personalized lithophanes in different sizes and shapes.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button style={{color:"orange"}}size="small" >
          Place Order
        </Button>
      </CardActions>
      
    </Card>
    </div>

    </div>
  );
}
