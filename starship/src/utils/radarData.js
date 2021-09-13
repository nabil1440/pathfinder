const radarData = (rawData = {}) => {
  let data = {
    labels: [
      'Project Coding',
      'Other Coding',
      'Non-Coding',
      'Gaming',
      'Social'
    ],
    datasets: [
      {
        label: 'Minutes',
        data: [
          rawData.projectCoding || null,
          rawData.otherCoding || null,
          rawData.nonCoding || null,
          rawData.gaming || null,
          rawData.social || null
        ],
        backgroundColor: 'rgba(0, 180, 127, 0.3)',
        borderColor: 'rgba(0, 180, 127, 0.4)',
        borderWidth: 1
      }
    ]
  };

  return data;
};

export default radarData;
