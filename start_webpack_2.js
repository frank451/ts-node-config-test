const webpack = require('webpack');

const webpackConfig = require('./webpack.config_2');

const compiler = webpack(
    webpackConfig
);

const watching = compiler.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined,
  }, (err, stats) => { // Stats Object
    // Print watch/build result here...
    // console.log(stats);
    console.log('#');
  });