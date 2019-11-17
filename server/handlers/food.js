function handler(req, res, next) {
  console.log("Food handler");
  res.send("inside food handler");
}
module.exports = handler;
