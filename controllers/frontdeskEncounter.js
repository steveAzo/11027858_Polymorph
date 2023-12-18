
exports.startEncounter = async (req, res) => {
    try {
      const { patientId, dateAndTime, typeOfEncounter } = req.body;
  
  
      res.status(200).json({ message: 'Encounter started successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };