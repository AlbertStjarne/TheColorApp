import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white',
      '& span': {
        backgroundColor: 'yellow',
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <section className={classes.secondary}>
        Some extra text
        <h1>
          Mini Palette<span>Span inside h1</span>
        </h1>
        <span>Span outside h1</span>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
