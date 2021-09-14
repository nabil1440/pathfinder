const express = require('express');
const app = express();
require('dotenv').config(); // Cannot read environment variables without this
// Middlewares
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Auth middleware
const auth = require('./middlewares/auth');
// Authentication libs
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Database models
const { User } = require('./models');

// Static route
app.use(express.static('public'));

app.use('/data', auth, require('./routes/rootRoute'));

app.post('/signup', async (req, res) => {
  try {
    const { name, password } = req.body;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });

    const user = await User.create({
      name,
      password: hashedPassword
    });

    return res.status(200).json({
      msg: 'Sign up successful!',
      user
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal server error!' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ where: { name } });

    if (!user) return res.sendStatus(404);

    // Compare the plain password to the hashed password from the user promise
    const match = await bcrypt.compare(password, user.password);

    // If the password is wrong then send an error
    if (!match) return res.sendStatus(403);

    // Cook a token and send it as the response
    const token = jwt.sign({ uuid: user.uuid }, process.env.TOKEN_SECRET);

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal server error!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
