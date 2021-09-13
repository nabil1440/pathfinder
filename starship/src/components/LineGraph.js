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
          color: 'green'
        },
        grid: {
          color: '#eee'
        }
      },
      y: {
        ticks: {
          color: 'green'
        },
        grid: {
          color: '#eee'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'green'
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
      <Line data={processData(days)} />
    </>
  );
};

export default LineGraph;
