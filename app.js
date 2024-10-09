const express = require('express');

const AppError = require('./utils/appError');
const weatherRouter = require('./routes/weatherRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
// app.use('/api');

app.use(express.static(`${__dirname}/static`));

app.use('/api/v1/weather', weatherRouter);

app.use('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} from the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;