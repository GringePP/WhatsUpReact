function handler(req, res, next) {
  console.log(req.params);
  // res.send("OK");
  const foodId = req.params.foodId;
  if (foodId === "all") {
    res.json({ all: "all" });
  } else {
    res.json(getFoodDetail(foodId));
  }
}

function getFoodDetail(id) {
  return {
    id,
    name: "random food"
  };
}

module.exports = handler;
