import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faEdit,
  faTrash,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Patients = () => {
  return (
    <div className="container-fluid">
      <div className="btn btn-primary mt-4 mr-5">Add Patients</div>
      <table className="table-striped table-bordered table-sm mt-4 col-md-12">
        <thead>
          <tr className="d-flex">
            <th className="col-1">Patient No</th>
            <th className="col-1">Gender</th>
            <th className="col-1">Age</th>
            <th className="col-1">Hospital</th>
            <th className="col-1">Village</th>
            <th className="col-1">District</th>
            <th className="col-2">Date Injured</th>
            <th className="col-2">Transport Mode</th>
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
            <td className="col-2">
              <input type="text" value="" className="col-12" />
            </td>
            <td className="col-2">
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
            <td className="col-1">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-4 text-danger icon"
              />
              <FontAwesomeIcon
                icon={faMap}
                className="mr-4 text-primary icon"
              />
            </td>
          </tr>
          <tr className="d-flex">
            <td className="col-1">1</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-4 text-danger icon"
              />
              <FontAwesomeIcon
                icon={faMap}
                className="mr-4 text-primary icon"
              />
            </td>
          </tr>

          <tr className="d-flex">
            <td className="col-1">1</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-4 text-danger icon"
              />
              <FontAwesomeIcon
                icon={faMap}
                className="mr-4 text-primary icon"
              />
            </td>
          </tr>

          <tr className="d-flex">
            <td className="col-1">1</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Otto</td>
            <td className="col-1">@mdo</td>
            <td className="col-1">Mark</td>
            <td className="col-1">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">Mark</td>
            <td className="col-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-4 text-primary icon"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-4 text-danger icon"
              />
              <FontAwesomeIcon
                icon={faMap}
                className="mr-4 text-primary icon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Patients;
