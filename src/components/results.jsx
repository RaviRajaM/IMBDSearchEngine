import React, { Component } from "react";
import SearchResults from './searchResults'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieArray: []
    }
  }
  listItems = (data) => {
    debugger
    console.log(data)
    if (data != null) {
      for (let i = 0; i < data.length; i++) {
        this.setState({
          movieArray: [
            ...this.state.movieArray,
            data[i].Title
          ]
        })
      }
    }
    console.log(this.state.movieArray)
  };

  render() {
    const {
      list,
      searchString
    } = this.props
    return (
      < div >
        <h6>Results for "{searchString}" </h6>
        <div>
          <Select >
            {this.listItems(list)}
          </Select>

        </div>
      </div >
    );
  }
}

export default Results;
