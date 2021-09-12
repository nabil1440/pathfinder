const processData = rawData => {
  let dates = [];

  let projectCoding = {
    label: 'Project Coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  };

  let otherCoding = {
    label: 'Other Coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  };

  let nonCoding = {
    label: 'Non-coding (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  };

  let gaming = {
    label: 'Gaming (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  };

  let social = {
    label: 'Social Media (minutes)',
    data: [],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  };

  // const schema = [
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 },
  //   { date: 'ISOString', projectCoding: 0, otherCoding: 0, nonCoding: 0, social: 0, gaming: 0 }
  // ];

  rawData.forEach(day => {
    dates.push(day.date);
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
