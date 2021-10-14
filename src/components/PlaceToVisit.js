import React from 'react';
import { makeStyles } from '@mui/styles';
import ImageCard from './ImageCard.js';
import places from '../static/places.js';
import useWindowPosition from '../hook/useWindowPosition.js';

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

  const checked = useWindowPosition('header');

  return (
    <div className={classes.root} id='place-to-visit'>
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}
