import React from 'react';
import { Field } from 'formik';

const groupClassNames = `
  col-md-12 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const BodyAreaWithSeriousInjuriesAndAis = () => (
  <div className="form-row border border-dark mb-4">
    <div className={groupClassNames}>
      <div
        className="border border-dark border-top-0 border-left-0 border-right-0 blue-header text-white"
        data-test="title"
      >
        Body Area with Serious Injuries and AIS
      </div>
      <div className="form-row">
        <div className="col-md-4 border border-dark border-top-0 border-left-0 border-bottom-0">
          <div className="text-right mr-md-2">AIS</div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-left-0">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  name="head/neck/face"
                  id="injuryType1"
                />
                <label className="form-check-label" htmlFor="injuryType1">
                  Head/Neck/Face
                </label>
              </div>
            </div>
            <div className="col-md-2 border border-dark border-left-0 border-right-0">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="head/neck/face/ais"
                  id="injuryTypeAIS1"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-top-0 injury border-bottom-0 border-left-0">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  name="head/neck/face"
                  id="injuryType1"
                />
                <label className="form-check-label" htmlFor="injuryType1">
                  Spinal cord injury
                </label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="head/neck/face/ais"
                  id="injuryTypeAIS1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-right mr-md-2">AIS</div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-left-0 ">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  name="bonyPelvisAndExtremities"
                  id="injuryType2"
                />
                <label className="form-check-label" htmlFor="injuryType2">
                  Bony Pelvis & Extremities
                </label>
              </div>
            </div>
            <div className="col-md-2 border border-dark border-left-0 border-right-0">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="bonyPelvisAndExtremities/ais"
                  id="injuryTypeAIS2"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-bottom-0 injury border-top-0 border-left-0">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  name="chest"
                  id="injuryType3"
                />
                <label className="form-check-label" htmlFor="injuryType3">
                  Chest
                </label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="chest/ais"
                  id="injuryTypeAIS3"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 border border-dark border-bottom-0 border-top-0 border-right-0">
          <div className="text-right mr-md-2">AIS</div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-left-0">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  name="bonyPelvisAndExtremities"
                  id="injuryType2"
                />
                <label className="form-check-label" htmlFor="injuryType2">
                  Abdomen/Pelvis/Perineum
                </label>
              </div>
            </div>
            <div className="col-md-2 border border-dark border-left-0 border-right-0">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="bonyPelvisAndExtremities/ais"
                  id="injuryTypeAIS2"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-10 border border-dark border-left-0 border-top-0 border-bottom-0 injury">
              <div className="form-check text-left ml-md-2">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  name="chest"
                  id="injuryType3"
                />
                <label className="form-check-label" htmlFor="injuryType3">
                  Vertebrae not involving the spinal code
                </label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  name="chest/ais"
                  id="injuryTypeAIS3"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BodyAreaWithSeriousInjuriesAndAis;
