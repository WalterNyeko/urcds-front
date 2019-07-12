import React, { Fragment } from "react";
import "../../styles/Profile.css";
const Profile = ({
  state: { username, errors, passwordHint, email, phone, website },
  handleInputChange
}) => {
  return (
    <Fragment>
      <div className="container-fluid row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <form onSubmit="" className="p-5 profile-form mt-3">
            <div className="form-group">
              <label htmlFor="username">
                Username <sub className="text-danger h2">*</sub>
              </label>
              <input
                type="text"
                className={
                  errors.username ? `error form-control` : `form-control`
                }
                name="username"
                id="username"
                placeholder="Enter username"
                defaultValue={username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <small id="username" className="form-text text-danger">
                  {errors.username}
                </small>
              )}
            </div>
            <span className="text-primary h6">Change Password</span>
            <div className="form-group">
              <label htmlFor="username">
                Password Hint <sub className="text-danger h2">*</sub>
              </label>
              <input
                type="text"
                className={
                  errors.passwordHint ? `error form-control` : `form-control`
                }
                name="passwordHint"
                id="passwordHint"
                placeholder="Enter Password Hint"
                defaultValue={passwordHint}
                onChange={handleInputChange}
              />
              {errors.passwordHint && (
                <small id="passwordHint" className="form-text text-danger">
                  {errors.passwordHint}
                </small>
              )}
            </div>
            <div className="row col-md-12 m-0 p-0">
              <div className="form-group col-md-6 pl-0">
                <label htmlFor="firstName">
                  First Name <sub className="text-danger h2">*</sub>
                </label>
                <input
                  type="text"
                  className={
                    errors.passwordHint ? `error form-control` : `form-control`
                  }
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  defaultValue={passwordHint}
                  onChange={handleInputChange}
                />
                {errors.passwordHint && (
                  <small id="firstName" className="form-text text-danger">
                    {errors.passwordHint}
                  </small>
                )}
              </div>

              <div className="form-group col-md-6 pr-0">
                <label htmlFor="lastName">
                  Last Name <sub className="text-danger h2">*</sub>
                </label>
                <input
                  type="text"
                  className={
                    errors.passwordHint ? `error form-control` : `form-control`
                  }
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  defaultValue={passwordHint}
                  onChange={handleInputChange}
                />
                {errors.passwordHint && (
                  <small id="lastName" className="form-text text-danger">
                    {errors.passwordHint}
                  </small>
                )}
              </div>
              <div className="form-group col-md-6 pl-0">
                <label htmlFor="firstName">
                  Email <sub className="text-danger h2">*</sub>
                </label>
                <input
                  type="email"
                  className={
                    errors.email ? `error form-control` : `form-control`
                  }
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  defaultValue={email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <small id="email" className="form-text text-danger">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className="form-group col-md-6 pr-0">
                <label htmlFor="phone">
                  Phone <sub className="text-danger h2">*</sub>
                </label>
                <input
                  type="text"
                  className={
                    errors.phone ? `error form-control` : `form-control`
                  }
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                  defaultValue={phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <small id="phone" className="form-text text-danger">
                    {errors.phone}
                  </small>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Website</label>
              <input
                type="text"
                className={
                  errors.website ? `error form-control` : `form-control`
                }
                name="website"
                id="website"
                placeholder="Enter Website URL"
                defaultValue={website}
                onChange={handleInputChange}
              />
              {errors.website && (
                <small id="website" className="form-text text-danger">
                  {errors.website}
                </small>
              )}
            </div>
            <li className="list-group-item no-line">
              <a
                className="text-primary"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Address
              </a>
              <div className="row">
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Address</label>
                        <select
                          className="form-control"
                          onChange={handleInputChange}
                          name="shipping_region_id"
                        />
                        {errors.shipping_region_id && (
                          <span className="text-danger">
                            {errors.shipping_region_id}
                          </span>
                        )}
                      </div>
                      <div className="form-group col-md-6 mt-2">
                        <label />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </form>
        </div>
        <div className="col-md-3" />
      </div>
    </Fragment>
  );
};
export default Profile;
