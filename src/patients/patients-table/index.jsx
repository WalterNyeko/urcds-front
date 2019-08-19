import React from "react";
import ReactTable from "react-table";
import "./patients-table.css";

import data from "../data";

const columns = [
  { Header: "Patient No.", accessor: "patient_no" },
  {
    Header: "Gender",
    accessor: "gender",
    style: { textAlign: "center" },
    width: 70,
    minWidth: 70,
    maxWidth: 70
  },
  {
    Header: "Age",
    accessor: "age",
    style: { textAlign: "right" },
    width: 50,
    minWidth: 50,
    maxWidth: 50
  },
  { Header: "Hospital", accessor: "hospital" },
  { Header: "Village", accessor: "village" },
  { Header: "District", accessor: "district" },
  { Header: "Date Injured", accessor: "date_injured" },
  { Header: "Transport Mode", accessor: "transport_mode" },
  {
    Header: "Actions",
    Cell: props => {
      return (
        <>
          <span className="btn bg-police btn-sm action-buttons">
            <i className="fa fa-search" />
          </span>
          <span className="btn bg-police btn-sm action-buttons">
            <i className="fa fa-edit" />
          </span>
          <span className="btn bg-police btn-sm action-buttons">
            <i className="fa fa-times" />
          </span>
        </>
      );
    },
    sortable: false,
    filterable: false
  }
];
const defaultPageSize = 10;

const PatientsTable = () => (
  <ReactTable
    data={data}
    columns={columns}
    minRows={2}
    sortable={false}
    defaultPageSize={defaultPageSize}
    filterable
    noDataText="No cash patients found!"
    className="-striped -highlight outer-border-table"
    getTheadThProps={() => ({ className: "bg-police" })}
  />
);

export default PatientsTable;
