const patientData = [...Array(30).keys()].map(key => ({
  patient_no: `patient${key}`,
  gender: "F",
  age: 30,
  hospital: "Masaka referral hospital",
  village: "kepco",
  district: "Kayunga",
  date_injured: "2015-11-16 12:34",
  transport_mode: "Car"
}));

export default patientData;
