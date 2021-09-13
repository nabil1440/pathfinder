import React from 'react';
import { Radar } from 'react-chartjs-2';

import radarData from '../utils/radarData';

import { useSelector } from 'react-redux';

const DayRadar = () => {
  const { oneDay } = useSelector(state => state.data);

  return <Radar data={radarData(oneDay)} />;
};

export default DayRadar;
