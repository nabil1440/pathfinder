const express = require('express');
const router = express.Router();
// Srquelize operator
const { Op } = require('sequelize');
const { Day } = require('../models');
// Helper functions
const {
  getOneDayRange,
  getRange,
  rangeOptions
} = require('../utils/dateFuncs');
// Attributes
const { dayAtts } = require('../utils/atts');

// One day by taking an ISO string in the query params
router.get('/one', async (req, res) => {
  try {
    const { ISOString } = req.query;
    if (!ISOString) return res.status(400).json({ msg: 'Send ISOString' });

    // Destructure the range
    const [start, end] = getOneDayRange(ISOString);
    // Query options
    const options = {
      where: { date: { [Op.between]: [start, end] } },
      attributes: dayAtts
    };
    const day = await Day.findOne(options);

    return res.status(200).json(day);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// Get date for a range
router.get('/range', async (req, res) => {
  try {
    const { startISO, endISO, range } = req.query;
    if (startISO && !endISO)
      return res.status(400).json({ msg: 'Send both start and end' });

    // Destructure range
    const [start, end] = getRange(startISO, endISO);
    // Query options
    const [options, reverse] = rangeOptions(start, end, range);

    const result = await Day.findAll(options || {});
    const days = reverse ? result.reverse() : result;

    return res.status(200).json(days);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      date,
      projectCoding,
      otherCoding,
      gaming,
      social,
      nonCoding,
      comment
    } = req.body;

    const day = await Day.create({
      date,
      projectCoding,
      otherCoding,
      gaming,
      social,
      nonCoding,
      comment
    });

    return res.status(200).json({ msg: 'Success', day });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const {
      projectCoding,
      otherCoding,
      gaming,
      social,
      nonCoding,
      comment,
      rating
    } = req.body;

    const { date } = req.query;
    if (!date) return res.status(404).json({ msg: 'Specify date' });

    const day = await Day.findOne({ where: { date } });

    day.projectCoding = projectCoding || day.projectCoding;
    day.otherCoding = otherCoding || day.otherCoding;
    day.gaming = gaming || day.gaming;
    day.social = social || day.social;
    day.nonCoding = nonCoding || day.nonCoding;
    day.comment = comment || day.comment;
    day.rating = rating || day.rating;

    await day.save();

    return res.status(200).json(day);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
