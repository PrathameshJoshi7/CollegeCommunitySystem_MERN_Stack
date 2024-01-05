const jwt = require('jsonwebtoken');
const secretKey = process.env.JWTPRIVATEKEY;

function getUserIdFromToken(getToken) {
  try {
    const decoded = jwt.verify(getToken, secretKey);
    //console.log("Decoded Token:", decoded);
    return decoded._id;
  } catch (error) {
    console.log("error:",error);
  }
}

module.exports = getUserIdFromToken;
