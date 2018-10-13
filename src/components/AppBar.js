import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

// styles for material ui
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// top-left corner icon
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// materil ui header
function appBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
        <a href="/">
        <HomeIcon className={classes.icon} color="action" />
        </a>
          </IconButton>
        <Typography variant="h3" color="inherit" className={classes.grow}>
            TvMaze Shows
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appBar);
