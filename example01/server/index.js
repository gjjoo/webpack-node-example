const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.dev');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const app = express();

app.use(express.static('client/dist'));

const webpackCompiler = webpack(webpackConfig);
const wpmw = webpackMiddleware(webpackCompiler, {});
app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
