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
          rawData.projectCoding === null ? null : rawData.projectCoding,
          rawData.otherCoding === null ? null : rawData.otherCoding,
          rawData.nonCoding === null ? null : rawData.nonCoding,
          rawData.gaming === null ? null : rawData.gaming,
          rawData.social === null ? null : rawData.social
        ],
        backgroundColor: 'rgba(0, 176, 138, .5)',
        borderColor: 'rgba(0, 176, 138, 1)',
        borderWidth: 1
      }
    ]
  };

  return data;
};

export default radarData;
