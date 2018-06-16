var jwt = require("jsonwebtoken");
var jwtSecret = "555595";

module.exports.issue = function(payload) {
  token = jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
  return token;
};

module.exports.verify = function(token, callback) {
  return jwt.verify(token, jwtSecret, callback);
};
