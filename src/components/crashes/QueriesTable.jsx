import React from "react";

const QueriesTable = () => {
  return (
    <div>
      <div className="btn btn-primary mt-4 mr-5">Add Query</div>
      <div className="btn btn-primary mt-4 ml-3">Quick Search</div>
      <table className="table-striped table-bordered table-sm mt-4 col-md-12">
        <thead>
          <tr className="d-flex">
            <th className="col-2">Query Name</th>
            <th className="col-2">Query Description</th>
            <th className="col-2">Date Created</th>
            <th className="col-2">Last Updated</th>
            <th className="col-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d-flex">
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>

            <td className="col-4" />
          </tr>
          <tr className="d-flex">
            <td className="col-2">1</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Otto</td>
            <td className="col-2">@mdo</td>
            <td className="col-4">Mark</td>
          </tr>
          <tr className="d-flex">
            <td className="col-2">2</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Otto</td>
            <td className="col-2">@mdo</td>
            <td className="col-4">Mark</td>
          </tr>

          <tr className="d-flex">
            <td className="col-2">3</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Otto</td>
            <td className="col-2">@mdo</td>
            <td className="col-4">Mark</td>
          </tr>

          <tr className="d-flex">
            <td className="col-2">4</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Otto</td>
            <td className="col-2">@mdo</td>
            <td className="col-4">Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default QueriesTable;
