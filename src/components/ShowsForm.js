import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const ShowsForm = (props) => {
    const { classes } = props;

    return (
        <form onSubmit={props.getShow}>
            <Input style={{ margin :"20px auto",width : "400px"}} type="text" name="search" placeholder="Enter Show Name" autoFocus/>
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Search
            </Button>
        </form>
    );
}

ShowsForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default  withStyles(styles)(ShowsForm);