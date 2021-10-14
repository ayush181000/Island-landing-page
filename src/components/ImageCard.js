import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px;',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '2rem',
  },
  desc: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#ddd',
    fontSize: '1.1rem',
  },
}));

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component='img'
          image={place.imageUrl}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
