import React, { Fragment } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

const Severity = () => {
  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card">
            <List
              component="nav"
              style={{ float: "left" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Crash Severity</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Fatal`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Serious`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Slight`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Damage Only`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Others`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Unknown`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <List
              component="nav"
              style={{ float: "right" }}
              subheader={
                <ListSubheader component="div">
                  <strong>District</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Kampala`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Kayunga`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Lugazi`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Masaka`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Mpigi`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Wakiso`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <List
              component="nav"
              style={{ float: "left" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Casualty Class</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Bicycle passenger`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Car passenger`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Other passengers`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Passenger Light omnibus`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Passenger heavy omnibus`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Passenger medium omnibus`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Passenger on motorcycle`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Pedestrian`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Unknown`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <List
              component="nav"
              style={{ float: "right" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Collision Type</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Angle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Head On Collision`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Hit Pedestrian`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Single vehicle, hit object`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Single vehicle, off road`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Rear end`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Side swipe`}
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
export default Severity;
