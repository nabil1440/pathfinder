import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { logoutUser } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const OneDay = () => {
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const logOut = () => dispatch(logoutUser());

  const handleSubmit = e => {
    e.preventDefault();
    let ISO;
    try {
      ISO = new Date(date).toISOString();
    } catch (err) {
      console.log(err);
    }
    console.log(ISO);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" align="center">
          Activities of One Day
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: 15 }}>
          <TextField
            placeholder="yyyy-mm-dd"
            value={date}
            onChange={e => setDate(e.target.value)}
            name="Date"
            label="Date"
            type="text"
            fullWidth
            style={{
              marginBottom: 10
            }}
          />
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </form>

        <Typography variant="h6">Date</Typography>
        <Typography variant="body1">ProjectCoding</Typography>
        <Typography variant="body1">OtherCoding</Typography>
        <Typography variant="body1">Gaming</Typography>
        <Typography variant="body1">Social</Typography>
        <Typography variant="body1">NonCoding</Typography>
        <Typography variant="body1">Rating</Typography>
        <Typography variant="body2">
          Alternatively, a radar chart can be here
        </Typography>

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
