const express = require('express');
const bodyparser = require('body-parser');
const route = require('./Routes/routes')
const app = express();
const cors = require('cors')

app.use(bodyparser.json());
app.use(cors());
app.use('/mCart', route);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

module.exports = app;