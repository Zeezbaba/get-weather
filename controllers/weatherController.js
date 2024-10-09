const axios = require('axios');
const asyncErrorHandler = require("../utils/asyncErrorHandler");

exports.getWeather = asyncErrorHandler(async (req, res) => {
  const city = req.query.city || 'London';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  res.status(200).json(response.data);
});