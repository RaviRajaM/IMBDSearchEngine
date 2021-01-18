import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Results from './results';
import { MDBCol, MDBIcon } from "mdbreact";
import Logo from "./movieImage1.jpg";
import {
  Row,
  Col,
} from "reactstrap";

class SearchResults extends Component {
  state = {
    movies: null,
    loading: false,
    value: '',
    searchString: '',
    movieArray: [],
    resultlist: []
  };
  divStyle = {
    margin: "50px",
    background: "aliceblue",
  };

  headerStyle = {
    fontFamily: "monospace",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  };

  formStyle = {
    marginLeft: "30px",
    background: "white",
    borderStyle: "ridge",
    marginRight: '30px',
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
    let movieArray = [];
    if (movies != null) {
      for (let i = 0; i < movies.length; i++) {
        movieArray.push({
          titleName: movies[i].Title,
          titleYear: movies[i].Year
        });
      }
      this.setState({ resultlist: movieArray })
    }
    if (movies === undefined) {
      this.setState({ resultlist: [] })
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
        <div className="wizard-basic-step">
          <div style={this.divStyle}>
            <h1 style={this.headerStyle}>The Shoppies</h1>
            <div style={this.formStyle}>
              <Row>
                <Col style={{ margin: "15px" }}>
                  <Form>
                    <Form.Group >
                      <MDBCol md="12">

                        <label>Movie Title</label>
                        <form className="form-inline mb-4">
                          <MDBIcon icon="search" />
                          <input className="form-control form-control-sm ml-3 w-75" type="text"
                            placeholder="Search for Movie Title" aria-label="Search"
                            onChange={e => this.onChangeHandler(e)} autoComplete="off"
                            value={this.state.value} />
                        </form>
                      </MDBCol>
                      <Form.Text className="text-muted">
                        Please enter at least three characters to search for Movie Title.
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
                <Col style={{ margin: "10px" }}> <img src={Logo} /> </Col>
              </Row>
            </div>
            <div className="Container" >
              <div className="row">
                <div className="col-md" style={this.container}>
                  <Results list={this.state.resultlist} searchString={this.state.value} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchResults;