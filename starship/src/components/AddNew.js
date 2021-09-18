import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import makeStyles from '@material-ui/styles/makeStyles';
import { dates, months } from '../utils/dateElements';

import { useDispatch, useSelector } from 'react-redux';
import { addNewData } from '../redux/actions/dataActions';

import parseAddition from '../utils/parseAddition';

const useStyles = makeStyles({
  makeWay: {
    margin: '10px 0 10px 0'
  }
});

const AddNew = () => {
  const [open, setOpen] = useState(false);

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  const [projectCoding, setProjectCoding] = useState('');
  const [otherCoding, setOtherCoding] = useState('');
  const [nonCoding, setNonCoding] = useState('');
  const [social, setSocial] = useState('');
  const [gaming, setGaming] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const add = data => dispatch(addNewData(data));

  const handleSubmit = e => {
    e.preventDefault();
    // Send ISO
    console.log({
      date: `${year}-${month}-${date}`,
      projectCoding,
      otherCoding,
      nonCoding,
      social,
      gaming,
      rating,
      comment
    });

    add({
      date: new Date(`${year}-${month}-${date}`).toISOString(),
      projectCoding: parseAddition(projectCoding) || 0,
      otherCoding: parseAddition(otherCoding) || 0,
      nonCoding: parseAddition(nonCoding) || 0,
      social: parseAddition(social) || 0,
      gaming: parseAddition(gaming) || 0,
      rating: parseFloat(rating) || null,
      comment: comment || null
    });
  };

  const { days } = useSelector(state => state.data);

  useEffect(() => {
    setOpen(false);

    setYear('');
    setMonth('');
    setDate('');

    setProjectCoding('');
    setOtherCoding('');
    setNonCoding('');
    setSocial('');
    setGaming('');
    setRating('');
    setComment('');
  }, [days]);

  const { makeWay } = useStyles();

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)} color="primary">
        Add New
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
      >
        <DialogContent>
          <form onSubmit={handleSubmit} autoComplete="off">
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

            <TextField
              className={makeWay}
              fullWidth
              name="Project Coding"
              label="Project Coding"
              value={projectCoding}
              helperText={
                projectCoding ? parseAddition(projectCoding) : 'Invalid!'
              }
              onChange={e => setProjectCoding(e.target.value)}
              placeholder="Project Coding"
            />
            <TextField
              className={makeWay}
              fullWidth
              name="Other Coding"
              label="Other Coding"
              value={otherCoding}
              helperText={otherCoding ? parseAddition(otherCoding) : 'Invalid!'}
              onChange={e => setOtherCoding(e.target.value)}
              placeholder="Other Coding"
            />
            <TextField
              className={makeWay}
              fullWidth
              name="Non-Coding"
              label="Non-Coding"
              value={nonCoding}
              helperText={nonCoding ? parseAddition(nonCoding) : 'Invalid!'}
              onChange={e => setNonCoding(e.target.value)}
              placeholder="Non-Coding"
            />
            <TextField
              className={makeWay}
              fullWidth
              name="Gaming"
              label="Gaming"
              value={gaming}
              helperText={gaming ? parseAddition(gaming) : 'Invalid!'}
              onChange={e => setGaming(e.target.value)}
              placeholder="Gaming"
            />
            <TextField
              className={makeWay}
              fullWidth
              name="Social"
              label="Social"
              value={social}
              helperText={social ? parseAddition(social) : 'Invalid!'}
              onChange={e => setSocial(e.target.value)}
              placeholder="Social"
            />
            <TextField
              className={makeWay}
              fullWidth
              name="Rating"
              label="Rating"
              value={rating}
              onChange={e => setRating(e.target.value)}
              placeholder="Rating"
            />
            <TextField
              className={makeWay}
              fullWidth
              multiline
              minRows="4"
              name="Comment"
              label="Comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Comment"
            />

            <Button
              className={makeWay}
              type="submit"
              fullWidth
              variant="contained"
            >
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNew;
