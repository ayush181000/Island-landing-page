import React from 'react';
import { makeStyles } from '@mui/styles';
import ImageCard from './ImageCard.js';
import places from '../static/places.js';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function PlacesToVisit() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageCard place={places[1]} />
      <ImageCard place={places[0]} />
    </div>
  );
}
