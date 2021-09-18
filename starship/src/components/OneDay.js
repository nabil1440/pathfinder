import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Select
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { logoutUser } from '../redux/actions/authActions';
import { getOneDay } from '../redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';

import DayRadar from './DayRadar';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { dates, months } from '../utils/dateElements';

const OneDay = () => {
  // This is for selection menu
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  dayjs.extend(localizedFormat);

  const dispatch = useDispatch();
  const get = ISO => dispatch(getOneDay(ISO));
  const logOut = () => dispatch(logoutUser());

  const { oneDay } = useSelector(state => state.data);

  const handleSubmit = e => {
    e.preventDefault();
    let ISO;
    try {
      ISO = `${year}-${month}-${date}`;
      get(ISO);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // get(new Date().toISOString());
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" align="center">
          Activities of One Day
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: 15 }}>
          <FormControl
            style={{ marginRight: 15, minWidth: 60, marginBottom: 15 }}
          >
            <InputLabel>Date</InputLabel>
            <Select value={date} onChange={e => setDate(e.target.value)}>
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

          <FormControl
            style={{ marginRight: 15, minWidth: 70, marginBottom: 15 }}
          >
            <InputLabel>Month</InputLabel>
            <Select value={month} onChange={e => setMonth(e.target.value)}>
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

          <FormControl
            style={{ marginRight: 15, minWidth: 60, marginBottom: 15 }}
          >
            <InputLabel>Year</InputLabel>
            <Select value={year} onChange={e => setYear(e.target.value)}>
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

          <Button fullWidth type="submit" variant="contained" color="primary">
            Find out
          </Button>
        </form>

        <Typography variant="h6">
          {`Date: ${
            oneDay.date ? dayjs(oneDay.date).format('ddd, MMM D, YY') : null
          }`}
        </Typography>
        <DayRadar />
        <Typography variant="h5">
          {`Rating: ${oneDay.rating || null}`}
        </Typography>
        <Typography variant="body1">{`Comment: ${
          oneDay.comment || null
        }`}</Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: 20 }}
        >
          <span onClick={logOut} style={{ cursor: 'pointer' }}>
            Log out
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OneDay;
