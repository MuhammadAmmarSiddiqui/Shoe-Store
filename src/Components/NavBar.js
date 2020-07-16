import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
  },
  button: {
    textDecoration: 'none',
    color: '#efefef'
    
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});


function NavBar() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <AppBar position="static" bgcolor="warning.main">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <CheckCircleOutlineIcon />{'   '}
             Shoe Store
          </Typography>
          <Button color="inherit">
            <Link to="/" className={classes.button}> Home </Link>{' '}
          </Button>
          <Button color="inherit">
            <Link to="/about" className={classes.button}> About </Link>
          </Button>
          <Button color="inherit">
            <Link to="/product" className={classes.button}> Product </Link>
          </Button>{'    '}
          <ShoppingCartIcon />

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </div>
  );
}

export default NavBar;