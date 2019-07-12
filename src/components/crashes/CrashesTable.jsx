import React from "react";

const CrashesTable = () => {
  return (
    <div>
      <table className="table-striped table-bordered table-sm mt-4">
        <thead>
          <tr className="d-flex">
            <th className="col-1">Crash No</th>
            <th className="col-1">Town/Village</th>
            <th className="col-1">Road</th>
            <th className="col-1">Severity</th>
            <th className="col-1">Vehicles</th>
            <th className="col-1">Casualties</th>
            <th className="col-1">Date</th>
            <th className="col-2">Police Station</th>
            <th className="col-1">District</th>
            <th className="col-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d-flex">
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>

            <td className="col-1">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2" />
          </tr>
          <tr className="d-flex">
            <td className="col-1">1</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-2">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-2">@mdo</td>
          </tr>
          <tr className="d-flex">
            <td className="col-1">2</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-2">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-2">@mdo</td>
          </tr>

          <tr className="d-flex">
            <td className="col-1">3</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-2">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-2">@mdo</td>
          </tr>

          <tr className="d-flex">
            <td className="col-1">4</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-2">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-2">@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CrashesTable;
