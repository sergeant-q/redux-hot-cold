const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8081;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const fewestGuessCount = {
  count: null
}

app.get('/fewest-guesses', (req, res) => {
  res.status(200).json(fewestGuessCount.count);
});

app.post('/fewest-guesses', (req, res) => {
  let count = req.body.count;
  console.log('count received from front-end: ', count);
  if (count < fewestGuessCount.count || fewestGuessCount.count === null) {
    fewestGuessCount.count = count;
    res.status(201).json({count: fewestGuessCount.count});
  }
})


app.listen(PORT, function() {
  console.log(`app listening on port ${PORT}`);
});
