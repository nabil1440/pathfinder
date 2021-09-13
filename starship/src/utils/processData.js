import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const processData = rawData => {
  let dates = [];

  let projectCoding = {
    label: 'Project Coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgba(0, 176, 138, 0.3)',
    borderColor: 'rgba(0, 176, 138, 0.4)'
  };

  let otherCoding = {
    label: 'Other Coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgba(0, 106, 176, 0.3)',
    borderColor: 'rgba(0, 106, 176, 0.4)'
  };

  let nonCoding = {
    label: 'Non-coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 0, 0, 0.4)'
  };

  let gaming = {
    label: 'Gaming (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(116, 0, 176, 0.3)',
    borderColor: 'rgba(116, 0, 176, 0.4)'
  };

  let social = {
    label: 'Social Media (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderColor: 'rgba(255, 0, 0, 0.4)'
  };

  // const schema = [
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 }
  // ];

  rawData.forEach(day => {
    dates.push(dayjs(day.date).format('ddd, MMM D, YY'));
    projectCoding.data.push(day.projectCoding);
    otherCoding.data.push(day.otherCoding);
    nonCoding.data.push(day.nonCoding);
    social.data.push(day.social);
    gaming.data.push(day.gaming);
  });

  const data = {
    labels: [...dates],

    datasets: [
      { ...projectCoding },
      { ...otherCoding },
      { ...nonCoding },
      { ...gaming },
      { ...social }
    ]
  };

  return data;
};

export default processData;
