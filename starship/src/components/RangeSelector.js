import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

import { getBulkData } from '../redux/actions/dataActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  margin: {
    marginRight: 15
  }
});

const RangeSelector = () => {
  const { margin } = useStyles();

  const dispatch = useDispatch();

  const get = (start, end, range) => dispatch(getBulkData(start, end, range));

  const handleClick = str => {
    get(null, null, str);
  };

  return (
    <Box padding={2}>
      <Chip
        size="small"
        label="7D"
        clickable
        onClick={() => handleClick('7')}
        className={margin}
      />
      <Chip
        size="small"
        label="15D"
        clickable
        onClick={() => handleClick('15')}
        className={margin}
      />
      <Chip
        size="small"
        label="1M"
        clickable
        onClick={() => handleClick('30')}
        className={margin}
      />
      <Chip
        size="small"
        label="3M"
        clickable
        onClick={() => handleClick('90')}
        className={margin}
      />
      <Chip
        size="small"
        label="All Time"
        clickable
        onClick={() => handleClick('9000')}
        className={margin}
      />
    </Box>
  );
};

export default RangeSelector;
