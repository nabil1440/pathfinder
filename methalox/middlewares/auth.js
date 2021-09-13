const { User } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split('Bearer ')[1];
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });

    // Verify the token
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);

    // Take the uuid
    const { uuid } = payload;

    // Search the database
    const user = await User.findOne({ where: { uuid } });

    // If found then call next otherwise throw error
    if (!user) return res.status(403).json({ msg: 'Access denied!' });

    req.user = {};
    req.user.uuid = payload.uuid;
    req.user.name = payload.name;

    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ msg: 'Access denied!' });
  }
};
