const express = require('express');
const router = express.Router();
// Srquelize operator
const { Op } = require('sequelize');
const { Day } = require('../models');
// Helper functions
const {
  rangeOptions,
  getOneDayRange,
  getRange
} = require('../utils/dateFuncs');
// Attributes
const { dayAtts } = require('../utils/atts');

// One day by taking an ISO string in the query params
router.get('/one', async (req, res) => {
  try {
    const { dateString } = req.query;
    if (!dateString) return res.status(400).json({ msg: 'Send dateString' });

    // Destructure range
    const [start, end] = getOneDayRange(new Date(dateString).toISOString());
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
    const { startDate, endDate, range } = req.query;
    if (startDate && !endDate)
      return res.status(400).json({ msg: 'Send both start and end' });

    // range function
    const [start, end] = getRange(startDate, endDate);
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
      comment,
      rating
    } = req.body;

    const day = await Day.create({
      date,
      projectCoding,
      otherCoding,
      gaming,
      social,
      nonCoding,
      comment,
      rating
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

    const [start, end] = getOneDayRange(new Date(date).toISOString());

    const day = await Day.findOne({
      where: { date: { [Op.between]: [start, end] } }
    });

    day.projectCoding =
      projectCoding === null ? day.projectCoding : projectCoding;
    day.otherCoding = otherCoding === null ? day.otherCoding : otherCoding;
    day.gaming = gaming === null ? day.gaming : gaming;
    day.social = social === null ? day.social : social;
    day.nonCoding = nonCoding === null ? day.nonCoding : nonCoding;
    day.comment = comment || day.comment;
    day.rating = rating === null ? day.rating : rating;

    await day.save();

    return res.status(200).json(day);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
