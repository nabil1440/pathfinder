import React, { useState } from 'react';
// Select
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { dates, months } from '../utils/dateElements';

import { getBulkData } from '../redux/actions/dataActions';
import { useDispatch } from 'react-redux';

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');

  const [endDate, setEndDate] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const dispatch = useDispatch();

  const get = (start, end, range) => dispatch(getBulkData(start, end, range));

  const handleSubmit = e => {
    e.preventDefault();

    const start = `${startYear}-${startMonth}-${startDate}`;
    const end = `${endYear}-${endMonth}-${endDate}`;
    get(start, end, null);
  };

  return (
    <Box style={{ padding: '20px 0px 0px 20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: 15 }}>
        <FormControl style={{ marginRight: 15, minWidth: 100 }}>
          <InputLabel>Start Date</InputLabel>
          <Select
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          >
            <MenuItem value="Date">
              <em>Month</em>
            </MenuItem>
            {dates.map(date => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ marginRight: 15, minWidth: 120 }}>
          <InputLabel>Start Month</InputLabel>
          <Select
            value={startMonth}
            onChange={e => setStartMonth(e.target.value)}
          >
            <MenuItem value="Month">
              <em>Month</em>
            </MenuItem>
            {months.map(item => (
              <MenuItem key={item.name} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ marginRight: 15, minWidth: 100 }}>
          <InputLabel>Year</InputLabel>
          <Select
            value={startYear}
            onChange={e => setStartYear(e.target.value)}
          >
            <MenuItem value="Month">
              <em>Year</em>
            </MenuItem>
            <MenuItem key={2021} value={2021}>
              2021
            </MenuItem>
            <MenuItem key={2022} value={2022}>
              2022
            </MenuItem>
            <MenuItem key={2023} value={2023}>
              2023
            </MenuItem>
            <MenuItem key={2024} value={2024}>
              2024
            </MenuItem>
          </Select>
        </FormControl>

        <Typography
          style={{
            marginRight: 20,
            display: 'inline',
            verticalAlign: 'bottom'
          }}
        >
          to
        </Typography>

        <FormControl style={{ marginRight: 15, minWidth: 100 }}>
          <InputLabel>End Date</InputLabel>
          <Select value={endDate} onChange={e => setEndDate(e.target.value)}>
            <MenuItem value="Date">
              <em>Month</em>
            </MenuItem>
            {dates.map(date => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ marginRight: 15, minWidth: 100 }}>
          <InputLabel>End Month</InputLabel>
          <Select value={endMonth} onChange={e => setEndMonth(e.target.value)}>
            <MenuItem value="Month">
              <em>Month</em>
            </MenuItem>
            {months.map(item => (
              <MenuItem key={item.name} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ marginRight: 15, minWidth: 100 }}>
          <InputLabel>Year</InputLabel>
          <Select value={endYear} onChange={e => setEndYear(e.target.value)}>
            <MenuItem value="Month">
              <em>Year</em>
            </MenuItem>
            <MenuItem key={2021} value={2021}>
              2021
            </MenuItem>
            <MenuItem key={2022} value={2022}>
              2022
            </MenuItem>
            <MenuItem key={2023} value={2023}>
              2023
            </MenuItem>
            <MenuItem key={2024} value={2024}>
              2024
            </MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: 12 }}
          color="secondary"
        >
          Find out
        </Button>
      </form>
    </Box>
  );
};

export default DateRangeSelector;
