const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/', require('./src/routes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
