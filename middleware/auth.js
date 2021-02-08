require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header(process.env.TOKEN);

  if (!token) {
    return res.status(401).json({ message: 'No token, access denied' });
  }

  try {
    const decodedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decodedUser;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: 'Access denied' });
  }
};
