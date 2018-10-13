
import React, { Component } from 'react';
import axios from "axios";
import AppBar from './AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// this img if the show doesnt have image this will be rendered
import NoImg from '../../src/404.png'

// materil ui styles
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '100%',
    width: '70%',
    marginTop : 50,
    paddingTop : 50,
    display:'inline-block'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Show extends Component { 
  state = {
      showCollection : [], //show details about the show 
  }
  //fetch show by id
  componentDidMount() {
    //send axios http request
    const showId  = this.props.match.params.id;
    axios.get(`http://api.tvmaze.com/shows/${showId}`)
    .then((response) => {
      //collect results
      this.setState({ showCollection : response.data })
    })
  }

render() {
  const { classes } = this.props;
  return (
      <div className="App">
      {/* start header */}
       <AppBar/>
      {/* end header */}
      {
    //  start grid forrepresent all shows
     <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.demo} justify="center">
          {[1].map(show => (
            <Grid key={""} item style={{width :'70%',display:'inline-block',margin:"50px"}}>
              <Paper >
              <img
              alt="tvMaze"  
              style={{ width :"500px",height: "300px",margin:"20px"}} 
              src={this.state.showCollection.image == null ? NoImg : this.state.showCollection.image.medium}/>
              <Paper><code><h1>{this.state.showCollection.name}</h1></code></Paper>
              <Paper><p align="left"><code><b> Type : {this.state.showCollection.type ? this.state.showCollection.type : "N/A"}</b></code></p></Paper>
              <Paper><p align="left"><code><b>language : {this.state.showCollection.language ? this.state.showCollection.language : "N/A"}</b></code></p></Paper>
              <Paper><p align="left"><code><b>premiered : {this.state.showCollection.premiered ? this.state.showCollection.premiered : "N/A"}</b></code></p></Paper>
              <Paper><p align="left"><code><b>officialSite : {this.state.showCollection.officialSite ? this.state.showCollection.url : "N/A"}</b></code></p></Paper>
              <Paper><p align="left"><code><b>Url : {this.state.showCollection.url ? this.state.showCollection.url : "N/A"}</b></code></p></Paper>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    //  end grid forrepresent all shows
  }   
    <a href="/" ><h3>Back to all shows</h3></a>
      </div>
  );
}
}

Show.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Show);

