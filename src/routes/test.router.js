const express = require("express");
const testRouter = express.Router();

/* Add Single Post */
testRouter.post("/", (req, res, next) => {
  console.log(req.body);

  if (req.body) {
    res.status(200).send({
      success: true,
      message: "Post created successfully"
    });
  }
});

testRouter.get("/", (req, res, next) => {
  console.log(req);
  res.status(200).send({
      success: true,
      message: "Post created successfully"
    });
});

module.exports = testRouter;
