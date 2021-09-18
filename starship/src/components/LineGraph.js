import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import processData from '../utils/processData';

import { getBulkData } from '../redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';

import RangeSelector from './RangeSelector';
import DateRangeSelector from './DateRangeSelector';

const LineGraph = () => {
  // eslint-disable-next-line
  const options = {
    scales: {
      x: {
        ticks: {
          color: '#fff'
        },
        grid: {
          color: '#666'
        }
      },
      y: {
        ticks: {
          color: '#fff'
        },
        grid: {
          color: '#666'
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
  const dispatch = useDispatch();
  const get = () => dispatch(getBulkData());

  const { days } = useSelector(state => state.data);

  useEffect(() => {
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <DateRangeSelector />
      <RangeSelector />
      <Line data={processData(days)} options={options} />
    </>
  );
};

export default LineGraph;
