var JwtService = require("./../controllers/services/JwtService");

module.exports = async function(req, res, next) {
  var token = null;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(" ");
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.status(401).json({
        error: "Format is Authorization: Bearer [token]"
      });
    }
  }

  if (token === null) {
    return res.status(401).json({ err: "No Authorization header was found" });
  } else {
    JwtService.verify(token, (err, result) => {
      if (err) {
        //console.log("Auth error", err);
        return res.status(401).json({ error: "Token expired" });
      } else {
        req.user_data = result;
        return next();
      }
    });
  }
};
