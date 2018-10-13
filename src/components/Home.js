import React, { Component } from 'react';
import ShowsForm from "../components/ShowsForm";
import axios from "axios";
import { HashLink as Link } from 'react-router-hash-link';
import AppBar from './AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NoImg from '../../src/404.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Home extends Component { 
  state = {
    shows : [], //all show results
    searchShows : [] // searched keyword results
  }

  // get the result of a search in shows
  getShow = (e) => {
    e.preventDefault();
    //input search keyword get
    const showSearch  = e.target.elements.search.value;
    if(showSearch)
    {
      //send axios http request
      axios.get(`http://api.tvmaze.com/search/shows?q=${showSearch}`)
      .then((res) => {
        if(res.data.length !== 0){
          //collect results
          this.setState({ searchShows : res.data })
        }else{
          // inite error code
          this.setState({ searchShows : '404' })
        }
      })
    }
  }

  //fetch all tv shows when C loaded
  componentDidMount() {
    //send axios http request
    axios.get(`http://api.tvmaze.com/shows`)
    .then((response) => {
      //collect results
      this.setState({ shows : response.data })

    })
  }

render() {
  const { classes } = this.props;
  return (
      <div className="App">
      {/* start header */}
        <AppBar/>
      {/* end header */}
      {/* start search form */}
        <ShowsForm getShow={this.getShow}/> 
      {/* end search form */}

      {/* start content result div*/}
        <div>
            {
              // no matches error
              this.state.searchShows === '404' ? <h2>No Mataches Result for this keyword</h2> :
              // check if shows all or shows seach result only
                this.state.searchShows.length === 0
                 ? 
                //  start grid forrepresent all shows
                 <Grid container className={classes.root}>
                  <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center">
                      {this.state.shows.map(show => (
                        <Grid key={show.id} item>
                          <Paper className={classes.paper}>
                          <Link to={"/show/" + show.id}>{show.name}</Link>
                          <br/><br/>
                          <Link to={"/show/" + show.id}><img
                          alt="tvMaze" 
                          style={{ width :"110px ",heigth : "100px"}} 
                          src={show.image == null ? NoImg : show.image.medium}/></Link>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
                //  end grid forrepresent all shows
                :
                //  start represent search shows only
                <Grid container className={classes.root}>
                  <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center">
                      {this.state.searchShows.map(show => (
                        <Grid key={show.show.id} item>
                          <Paper className={classes.paper}>
                          <Link to={"/show/" + show.show.id}>{show.show.name}</Link>
                          <br/><br/>
                          <Link to={"/show/" + show.show.id}><img
                          alt="tvMaze"  
                          style={{ width :"110px ",heigth : "100px"}} 
                          src={show.show.image == null ? NoImg : show.show.image.medium}/></Link>
                          </Paper>
                        </Grid>
                      ))} 
                    </Grid>
                  </Grid>
                </Grid>
            }   
        </div>
        <br/>
        {/* go home after 404  and on search*/}
        {this.state.searchShows === '404' || this.state.searchShows.length > 0 ? <a href="/" ><h3>Back to all shows</h3></a>  :''}
      </div> 
      // end content result div
  );
}
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
