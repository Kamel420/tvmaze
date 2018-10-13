
import React, { Component } from 'react';
import axios from "axios";
// import { HashLink as Link } from 'react-router-hash-link';


class Show extends Component { 
    state = {
        showCollection : [], //show details
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
  return (
      <div className="App">
        {/* start header */}
          <header className="App-header">
            <p><code>TvMaze Shows Api</code></p>
        </header> 
        {/* end header */}
        {this.state.showCollection.name}

      </div>
  );
}
}

export default Show;

