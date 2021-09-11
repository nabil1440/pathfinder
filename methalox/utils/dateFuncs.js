const { Op } = require('sequelize');

const getOneDayRange = ISOString => {
  const date = new Date(ISOString);

  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  let lastMinuteOfToday =
    new Date(`${currentYear}-${currentMonth}-${currentDay + 1}`).getTime() -
    1000;
  lastMinuteOfToday = new Date(lastMinuteOfToday).toISOString();

  const firstMinuteOfToday = new Date(
    `${currentYear}-${currentMonth}-${currentDay}`
  ).toISOString();

  return [firstMinuteOfToday, lastMinuteOfToday];
};

const getRange = (startISO, endISO) => {
  if (!startISO || !endISO) return [null, null];

  const start = new Date(startISO);
  const startMonth = start.getMonth() + 1;
  const startYear = start.getFullYear();
  const startDay = start.getDate();

  const rangeStart = new Date(
    `${startYear}-${startMonth}-${startDay}`
  ).toISOString();

  const end = new Date(endISO);
  const endMonth = end.getMonth() + 1;
  const endYear = end.getFullYear();
  const endDay = end.getDate();

  let rangeEnd =
    new Date(`${endYear}-${endMonth}-${endDay + 1}`).getTime() - 1000;
  rangeEnd = new Date(rangeEnd).toISOString();

  return [rangeStart, rangeEnd];
};

const rangeOptions = (start, end, range) => {
  if (start && end) {
    return [{ where: { date: { [Op.between]: [start, end] } } }, false];
  } else if (range) {
    return [{ limit: range, order: [['date', 'DESC']] }, true];
  } else {
    return [null, false];
  }
};

module.exports = { getOneDayRange, getRange, rangeOptions };
