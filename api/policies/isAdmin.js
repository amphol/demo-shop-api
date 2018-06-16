module.exports = async function(req, res, proceed) {
  console.log("isAdmin: " + req.method + " " + req.path);
  var isAdmin = true;
  if (isAdmin === true) {
    return proceed();
  } else {
    return res.forbidden();
  }
};
