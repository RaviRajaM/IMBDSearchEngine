import React, { Component, Fragment } from "react";
import MaterialTable from "material-table";
import {
  Row,
  Col,
  Card,
} from "reactstrap";
const columns = [
  { title: "Movie Title", field: "titleName", align: "center" },
  { title: "Movie Released Year", field: "titleYear", align: "center" },
];



class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nominateArray: []
    }
  }
  rowClick = async (id, type) => {
    let movieToNominate = []
    movieToNominate.push({
      titleName: type.titleName,
      titleYear: type.titleYear
    })
    this.setState({ nominateArray: movieToNominate })
  };


  render() {
    const {
      searchString, } = this.props
    return (
      <Fragment>
        <Row>
          <Col xxs="12" className="mb-5">
            <div className="wizard-basic-step">
              <Card style={{ margin: "30px" }}>
                <div>
                  <MaterialTable
                    title={<h6 className="mb-4"><b>Search Results for <b>"{searchString}"</b></b></h6>}
                    data={this.props.list}
                    columns={columns}
                    options={{
                      paging: false,
                      actionsColumnIndex: -1,
                      search: false,
                      filtering: false,
                      maxBodyHeight: "250px",
                      pageSize: 5,
                      headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                      },
                      rowStyle: {
                        backgroundColor: '#EEE',
                      },

                    }}

                    actions={[
                      {
                        icon: "Edit",
                        tooltip: "Nominate",
                        onClick: (event, rowData) =>
                          this.rowClick(rowData.titleName, rowData),
                      },
                    ]}
                  />
                </div>
              </Card>
            </div>
          </Col>
          <Col xxs="12" className="mb-5">
            <Card style={{ margin: "30px" }}>
              <MaterialTable
                title={<h6 className="mb-4"> <b>Movies Nominated Table</b></h6>}
                columns={columns}
                data={this.state.nominateArray}
                options={{
                  paging: false,
                  actionsColumnIndex: -1,
                  search: false,
                  filtering: false,
                  maxBodyHeight: "200px",
                  pageSize: 5,
                  headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  },
                  rowStyle: {
                    backgroundColor: '#EEE',
                  },
                }}
                actions={[
                  {
                    icon: "Edit",
                    tooltip: "Delete",
                    onClick: (event, rowData) =>
                      this.rowClick(rowData.titleName, rowData),
                  },
                ]}
              />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Results;
