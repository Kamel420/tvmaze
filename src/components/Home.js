import React, { Component } from 'react';
import ShowsForm from "../components/ShowsForm";
import axios from "axios";
import { HashLink as Link } from 'react-router-hash-link';


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
  return (
      <div className="App">
      {/* start header */}
          <header className="App-header">
          <p><code>TvMaze Shows Api</code></p>
        </header> 
      {/* end header */}

      {/* start search form */}
        <ShowsForm getShow={this.getShow}/> 
      {/* end search form */}

      {/* start content result div*/}
        <div>
          <ul>
            {
              // no matches error
              this.state.searchShows === '404' ? <p>No Mataches Result for this keyword</p> :
              // check if shows all or shows seach result only
                this.state.searchShows.length === 0 ? 
                // show all shows
                this.state.shows.map(show => <li key={show.id}><Link to={"/show/" + show.id}>{show.name}</Link></li>) :
                // show the search for result only
                this.state.searchShows.map(show => <li key={show.show.id}><Link to={"/show/" + show.show.id}>{show.show.name}</Link></li>) 
            }
          </ul>
        </div>
        {/* go home after 404 */}
        {this.state.searchShows === '404' || this.state.searchShows.length > 0 ? <a href="/" >Back to all shows</a>  :''}
      {/* end content result div*/}
      </div> 
  );
}
}

export default Home;
