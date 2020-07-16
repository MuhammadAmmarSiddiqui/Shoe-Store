import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
  },
});


function ProductItem() {
  
  const classes = useStyles();
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h2>Product Not Found</h2>

  return (
    <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image={shoe.img}
        title="Shoe"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <h4>{shoe.name}</h4>
        </Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
        <IconButton aria-label="add to cart">
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ShoppingCartIcon />}
      >
        Add to Cart
      </Button>
        </IconButton>
      </ThemeProvider>
    </Card>
  );
}
  
export default ProductItem;