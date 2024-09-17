const express = require("express");
const app = express();
const { calculateStartEnd } = require("./services/calculate.service");

app.use(express.json());

app.post("/calculate", (req, res) => {
  try {
    const { paths } = req.body;

    const result = calculateStartEnd(paths);
    res.json({
      result: result
    })
  }
  catch (e) {
    res.status(500).send(e.message);
  }
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});