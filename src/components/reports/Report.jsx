import React, { Fragment } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

const Report = () => {
  return (
    <Fragment>
      <div className="container-fluid row mt-5">
        <div className="col-md-6">
          <div className="card">
            <List
              component="nav"
              style={{ float: "left" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Severity Report (1)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Crash Cause`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Police Station`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Surface Type`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Casualty Age/Gender`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Collision Type`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Road Surface`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Time`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Vehicle Type`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <List
              component="nav"
              style={{ float: "right" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Severity Report (2)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By District`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Roadway Character`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By  Vehicle Failure Type`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Crash Severity By Road Junction Type`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Surface Condition`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Crash Severity By Weather`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Report;
