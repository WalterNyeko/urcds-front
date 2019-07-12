import React, { Fragment } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

const Causes = () => {
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
                  <strong>Vehicle Type (1)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Tanker`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Dual-purpose vehicles`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Engineering Plant`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Fuel Truck`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Heavy Goods Vehicle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Heavy Omnibus`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Light Goods Vehicle`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Light Omnibus`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Medium Goods Vehicle`}
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
                  <strong>Vehicle Type (2)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Motorcycle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Pedal cycle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Pedestrian-controlled Vehicle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Tractor`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Trailers & Semi-Trailer`}
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
              style={{ float: "left" }}
              subheader={
                <ListSubheader component="div">
                  <strong>Cause of Crash (1)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Careless overtaking`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Careless pedestrian`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Dangerous loading`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Dazzled by lights of another vehicle`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Fatigue, illness`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Following too close (Tail-gating)`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Hit & Run`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Neglecting right of way or stop sign`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Obstacle on carriage way`}
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
                  <strong>Cause of Crash (2)</strong>
                </ListSubheader>
              }
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Over speeding`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Passenger falls from vehicle`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Passing too close`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Sudden entrance from a roadside`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Sudden turning`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    inset
                    primary={`Under influence of alcohol/drugs`}
                    style={{ paddingLeft: "5px" }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button>
                <ListItemText
                  inset
                  primary={`Using mobile phone`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Vehicle mechanical defects`}
                  style={{ paddingLeft: "5px" }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  inset
                  primary={`Violating traffic direction`}
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
      </div>
    </Fragment>
  );
};
export default Causes;
