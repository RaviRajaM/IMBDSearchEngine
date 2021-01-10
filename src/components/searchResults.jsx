import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Results from './results';

class SearchResults extends Component {
  state = {
    movies: null,
    loading: false,
    value: '',
    searchString: ''
  };
  divStyle = {
    margin: "100px",
    background: "aliceblue",
  };

  headerStyle = {
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  formStyle = {
    marginLeft: "30px",
    background: "white",
    borderStyle: "ridge",
    marginRight: '30px',
    paddingBottom: '30px'
  };



  inputStyle = {
    marginLeft: "20px",
    width: "600px",
  };

  form1Style = {
    marginBottom: "20px",
  };

  searchBar = {
    position: "relative",
  };

  faSearch = {
    position: "absolute",
    padding: "12px",
    top: "-10px",
    left: "5px",
    zindex: "1",
    paddingLeft: "25px",
  };

  container = {
    margin: '45px',
    background: "white",
    borderStyle: "ridge",
  };

  titlelabel = {
    marginLeft: "20px",
    marginTop: "10px",
    fontFamily: "monospace",
    fontSize: "x-large",
    fontWeight: "bold",
  };

  searchBar = {
    position: "relative",
  };

  faSearch = {
    position: "absolute",
    padding: "12px",
    top: "-10px",
    left: "5px",
    zindex: "1",
    paddingLeft: "25px",
  };

  inputStyle = {
    marginLeft: "20px",
    width: "600px",
  };

  search = async searchString => {
    this.setState({ loading: true });
    const res = await axios(
      `http://www.omdbapi.com/?s=${searchString}&apikey=36546a2c`
    );
    const movies = await res.data.Search;
    this.setState({ movies, loading: false });
    let movieList = movies
    if (this.state.movies) {
      debugger
      movieList = <Results list={this.state.movies} searchString={this.state.value} />;
    }
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };
  container = {
    margin: '45px',
    background: "white",
    borderStyle: "ridge",
  };

  render() {
    return (
      <Fragment>
        <div style={this.divStyle}>
          {" "}
          <h1 style={this.headerStyle}>The Shoppies</h1>
          <div style={this.formStyle}>

            <form>
              <label style={this.titlelabel}>Movie Title:</label>
              <br />
              <span className="search-bar" style={this.searchBar}>
                <i
                  className="fa fa-search"
                  style={this.faSearch}
                  aria-hidden="true"
                ></i>
                <input style={this.inputStyle} type="text" name="name"
                  onChange={e => this.onChangeHandler(e)} autoComplete="off"
                  placeholder="Type something to search"
                  value={this.state.value} />
              </span>
            </form>

          </div>
          <div className="Container" >
            <div className="row">
              <div className="col-md" style={this.container}>
                <Results list={this.state.movies} searchString={this.state.value} />
              </div>
              <div className="col-md" style={this.container}>
                <div> <label style={this.titlelabel}>Nominations </label> </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchResults;