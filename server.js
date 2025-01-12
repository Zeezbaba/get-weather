const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App starting on port ${port}...`);
});