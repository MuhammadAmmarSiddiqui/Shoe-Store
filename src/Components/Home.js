import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    maxWidth: '500px',
    height: '300px',
    margin: '0 auto',
    backgroundColor: '#fff59d',
  },
  heading: {
    textAlign: 'center',
    padding: '50px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.heading}>Welcome to my shoe store</h1>
        <h4>Go to the
            <Link to="/product" className={classes.button}> Product Page </Link>
              for shopping
        </h4>
      </Paper>
      
    </div>
  );
}