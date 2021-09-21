const { Op } = require('sequelize');

const getOneDayRange = ISOString => {
  const date = new Date(ISOString);

  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  let lastMinuteOfToday =
    new Date(`${currentYear}-${currentMonth}-${currentDay}`).getTime() +
    32255000;

  lastMinuteOfToday = new Date(lastMinuteOfToday).toISOString();

  const firstMinuteOfToday = new Date(
    `${currentYear}-${currentMonth}-${currentDay}`
  ).toISOString();

  return [firstMinuteOfToday, lastMinuteOfToday];
};

const getRange = (startDate, endDate) => {
  if (!startDate || !endDate) return [null, null];

  const startISO = new Date(startDate).toISOString();
  const endISO = new Date(endDate).toISOString();

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
    new Date(`${endYear}-${endMonth}-${endDay}`).getTime() + 90000000;
  rangeEnd = new Date(rangeEnd).toISOString();

  console.log({ rangeStart, rangeEnd });
  return [rangeStart, rangeEnd];
};

// Edge case hit on above two functions, not using them at all now

const rangeOptions = (start, end, range) => {
  if (start && end) {
    const s = new Date(start).toISOString();
    const e = new Date(end).toISOString();
    return [
      { where: { date: { [Op.between]: [s, e] } }, order: [['date', 'ASC']] },
      false
    ];
  } else if (range) {
    return [{ limit: range, order: [['date', 'DESC']] }, true];
  } else {
    return [null, false];
  }
};

module.exports = { getOneDayRange, getRange, rangeOptions };
