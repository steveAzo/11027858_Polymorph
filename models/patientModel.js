const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  surname: { type: String, required: true },
  otherNames: { type: String },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  residentialAddress: { type: String },
  emergencyContact: {
    name: { type: String },
    phoneNumber: { type: String },
    relationship: { type: String },
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
