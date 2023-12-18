const Patient = require('../models/patientModel');

exports.registerPatient = async (req, res) => {
  try {
    const {
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact,
    } = req.body;

    const newPatient = new Patient({
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact,
    });

    await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
