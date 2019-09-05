/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import HospitalPatientInfo from './hospital-patient-info';
import PatientInjuryPlaceInfo from './patient-injury-place-info';
import './patient-form.css';
import RoadStatusInfo from './road-status-information';
import BodyAreaWithSeriousInjuriesAndAis from './serious-injuries-area-and-ais';
import FormSignature from './form-signature';
import PatientDisposition from './patient-disposition';
import FormButtons from './form-buttons';

const formikEnhancer = withFormik({
  mapPropsToValues({
    hospitalOutpatientNo,
    hospitalInpatientNo,
    village,
    age,
    injuryDate,
    injuryTime,
    formFilledBy,
    formCheckedBy,
    formFilledOn,
    formCheckedOn,
    hospital,
    district,
  }) {
    return {
      hospitalOutpatientNo: hospitalOutpatientNo || '',
      hospitalInpatientNo: hospitalInpatientNo || '',
      village: village || '',
      age: age || '',
      injuryDate: injuryDate || '',
      injuryTime: injuryTime || '',
      formFilledBy: formFilledBy || '',
      formCheckedBy: formCheckedBy || '',
      formFilledOn: formFilledOn || '',
      formCheckedOn: formCheckedOn || '',
      hospital: hospital || {},
      district: district || {},
    };
  },
  handleSubmit(values) {
    const payload = {
      ...values,
      hospital: values.hospital.value,
      district: values.district.value,
      injuryDate: values.injuryDate,
    };
    console.log(payload);
  },
  validationSchema: Yup.object().shape({
    formFilledBy: Yup.string().required('Name is required'),
    formCheckedBy: Yup.string().required('Name is required'),
    formFilledOn: Yup.date()
      .nullable()
      .max(new Date(), 'Date can not be a future date')
      .required('Date is required'),
    formCheckedOn: Yup.date()
      .nullable()
      .max(new Date(), 'Date can not be a future date')
      .required('Date is required'),
    injuryDate: Yup.date()
      .nullable()
      .max(new Date(), 'Injury date can not be a future date')
      .required('Injury date is required'),
  }),
});

const PatientForm = ({
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  values,
}) => (
  <div className="page-wrapper">
    <div className="row">
      <div className="col-md-12">
        <Form>
          <div className="page-title">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h2 className="page-title-text" data-test="form-title">
                  Patient Form
                </h2>
              </div>
            </div>
          </div>
          <div className="page-body">
            <HospitalPatientInfo
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
            />
            <PatientInjuryPlaceInfo
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
            />
            <RoadStatusInfo
              setFieldValue={setFieldValue}
              injuryDate={values.injuryDate}
              injuryDateError={errors.injuryDate || null}
              touchedInjuryDate={touched.injuryDate || false}
              injuryTime={values.injuryTime}
              setFieldTouched={setFieldTouched}
            />
            <BodyAreaWithSeriousInjuriesAndAis />
            <PatientDisposition />
            <FormSignature
              filledByError={errors.formFilledBy || null}
              touchedFilledBy={touched.formFilledBy || false}
              checkedByError={errors.formCheckedBy || null}
              touchedCheckedBy={touched.formCheckedBy || false}
              filledOnError={errors.formFilledOn || null}
              touchedFilledOn={touched.formFilledOn || false}
              checkedOnError={errors.formCheckedOn || null}
              touchedCheckedOn={touched.formCheckedOn || false}
              setFieldValue={setFieldValue}
              formFilledOn={values.formFilledOn}
              formCheckedOn={values.formCheckedOn}
              setFieldTouched={setFieldTouched}
            />
            <FormButtons />
          </div>
        </Form>
      </div>
    </div>
  </div>
);

PatientForm.defaultProps = {
  errors: null,
  touched: null,
  values: null,
};

PatientForm.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  values: PropTypes.object,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default formikEnhancer(PatientForm);
