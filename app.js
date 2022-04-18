const express = require('express');
// const path = require('path');
// const https = require('https');
// const cookieParser = require('cookie-parser');

const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.status(200);
  }
  next();
});

axios.default.defaults.baseURL =
  'http://masterep.sampras.cn/index.php/factory-api/';
const defaultHeaders = {
  authorization: 'Basic bWFzdGVyOnBNUkFnQWpNZTFiSW5qMUI=',
};
// axios.default.defaults.httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });

const axiosGet = (req) => {
  return axios.get(req.path, {
    params: req.query,
    headers: {
      ...defaultHeaders,
      ...req.headers,
    }
  });
};
const axiosPost = (req) => {
  return axios.post(req.path, req.body, {
    headers: {
      ...defaultHeaders,
      ...req.headers,
    }
  });
};

app.post('*', async (req, res) => {
  const result = await axiosPost(req);
  res.send(result.data);
  res.end();
});

app.get('*', async (req, res) => {
  const result = await axiosGet(req);
  res.send(result.data);
  res.end();
});

module.exports = app;
