const express = require('express');
const router = express.Router();
const TravelPlan = require('../models/TravelPlan');  // Assuming you have a TravelPlan model

router.post('/', async (req, res) => {
  try {
    // Extract data from the request body
    const { destination, startDate, endDate, details } = req.body;

    // Create a new TravelPlan document
    const travelPlan = new TravelPlan({ destination, startDate, endDate, details });
    
    // Save the travel plan to the database
    await travelPlan.save();

    res.status(201).json({ message: 'Travel plan created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
