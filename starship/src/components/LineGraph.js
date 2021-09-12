import React from 'react';
import { Line } from 'react-chartjs-2';
import processData from '../utils/processData';

// const data = {
//   labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'], // Each day

//   // And array of different data
//   datasets: [
//     {
//       label: 'Project Coding (minutes)',
//       data: [12, 19, 3, 5, 2, 3], // An array of minutes
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)'
//     },
//     {
//       label: 'Other Coding (minutes)',
//       data: [15, 22, 6, 8, 5, 6], // An array of minutes
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 210)',
//       borderColor: 'rgba(255, 99, 132, 0.2)'
//     },
//     {
//       label: 'Non Coding (minutes)',
//       data: [24, 38, 6, 10, 4, 6], // An array of minutes
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(140, 99, 132, 0.2)'
//     }
//   ]
// };

const data = processData([]);

const LineGraph = () => {
  return <Line data={data} />;
};

export default LineGraph;
