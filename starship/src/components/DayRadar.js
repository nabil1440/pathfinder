import React from 'react';
import { Radar } from 'react-chartjs-2';

import radarData from '../utils/radarData';

import { useSelector } from 'react-redux';

const DayRadar = () => {
  const options = {
    scales: {
      r: {
        ticks: {
          display: false
        },
        angleLines: {
          color: '#666'
        },
        grid: {
          color: '#666'
        },
        pointLabels: {
          color: '#fff'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    }
  };
  const { oneDay } = useSelector(state => state.data);

  return <Radar data={radarData(oneDay)} options={options} />;
};

export default DayRadar;
