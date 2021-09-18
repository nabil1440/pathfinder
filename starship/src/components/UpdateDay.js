import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/styles/makeStyles';

import { useSelector, useDispatch } from 'react-redux';
import { updateOne } from '../redux/actions/dataActions';

import parseAddition from '../utils/parseAddition';

const useStyles = makeStyles({
  makeWay: {
    margin: '10px 0 10px 0'
  }
});

const UpdateDay = () => {
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

  const { oneDay } = useSelector(state => state.data);

  const dispatch = useDispatch();
  // eslint-disable-next-line
  const update = (dateString, data) => dispatch(updateOne(dateString, data));

  const handleSubmit = e => {
    e.preventDefault();
    // Param is not ISO
    // Date cannot be updated
    const dateStr = `${year}-${month}-${date}`;

    const data = {
      projectCoding: parseAddition(projectCoding) || 0,
      otherCoding: parseAddition(otherCoding) || 0,
      nonCoding: parseAddition(nonCoding) || 0,
      social: parseAddition(social) || 0,
      gaming: parseAddition(gaming) || 0,
      rating: parseFloat(rating) || null,
      comment: comment || null
    };

    update(dateStr, data);
  };

  useEffect(() => {
    setYear(new Date(oneDay.date).getFullYear().toString());
    setMonth((new Date(oneDay.date).getMonth() + 1).toString());
    setDate(new Date(oneDay.date).getDate().toString());

    setProjectCoding(oneDay.projectCoding === null ? '' : oneDay.projectCoding);
    setOtherCoding(oneDay.otherCoding === null ? '' : oneDay.otherCoding);
    setNonCoding(oneDay.nonCoding === null ? '' : oneDay.nonCoding);
    setGaming(oneDay.gaming === null ? '' : oneDay.gaming);
    setSocial(oneDay.social === null ? '' : oneDay.social);
    setRating(oneDay.rating === null ? '' : oneDay.rating);
    setComment(oneDay.comment === null ? '' : oneDay.comment);
    setOpen(false);
  }, [oneDay]);

  const { makeWay } = useStyles();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ marginLeft: 15 }}
        disabled={!Object.keys(oneDay).length}
        color="secondary"
      >
        Update Current
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
      >
        <DialogContent>
          <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
              label="Date"
              fullWidth
              disabled
              value={`${year}-${month}-${date}`}
            />
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
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateDay;
