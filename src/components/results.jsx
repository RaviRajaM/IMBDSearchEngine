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
      nominateArray: [],
      movieToNominate: []
    }
  }
  rowClick = async (id, type) => {
    debugger
    if (this.state.nominateArray.length >= 5) {
      alert("Maximum Nominations Exceeded")

    } else if (this.state.nominateArray.length <= 4) {
      let join = this.state.nominateArray.concat({
        titleName: type.titleName,
        titleYear: type.titleYear
      })
      this.setState({ nominateArray: join })
    }
  };

  deleteRow = (id, type) => {
    debugger
    let nominateArray1 = []
    nominateArray1 = this.state.nominateArray;
    nominateArray1.splice(type.tableData.id, 1);
    this.setState({
      nominateArray: nominateArray1
    })
  }
  render() {
    debugger
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
                    tooltip: "Delete",
                    onClick: (event, rowData) => { this.deleteRow(rowData.titleName, rowData) },
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
