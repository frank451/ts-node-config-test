const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

let webpackConfig = require('./webpack.config');

webpackConfig.plugins = [

new WebpackShellPluginNext({
//   onBeforeBuild:{
//     // scripts: ['echo "Webpack onBeforeBuild"','node dist/index'],
//     scripts: ['echo "Webpack onBeforeBuild"'],
//     blocking: false,
//     parallel: true
//   },
//   onBuildStart:{
//     scripts: ['echo "Webpack onBuildStart"'],
//     blocking: false,
//     parallel: true
//   },
//   onBuildEnd:{
//     // scripts: ['echo "Webpack onBuildEnd'],
//     scripts: ['echo "Webpack onBeforeEnd"','node-dev dist/index'],
//     blocking: false,
//     parallel: true
//   },
  onBuildExit:{
    // scripts: ['echo "Webpack BuildExit"'],
    scripts: ['echo "Webpack onBeforeEnd"','node-dev dist/index'],
    // scripts: ['echo "Webpack onBeforeEnd"','forever start dist/index.js'],
    blocking: false,
    parallel: true,
    // safe: true,
    // dev: false
  }
})
];

// const DaemonCommandPlugin = require('daemon-command-webpack-plugin');

// webpackConfig.plugins = [
//   new DaemonCommandPlugin('start_run_1'),
// ]


// const ExecaPlugin = require("execa-webpack-plugin");
// webpackConfig.plugins = [
//   new ExecaPlugin({
//     onBeforeRun: [
//       {
//         // args: ["build"],
//         cmd: 'echo "test##########"',
//         options: {
//           // cwd: process.cwd()
//         }
//       },
  
//     ],
 
//   onCompile: [
//     {
//       args: ["dist/index"],
//       cmd: 'node',
//     }
//   ]
// }
// )
// ];

// webpackConfig.plugins = [

// // {
// //     apply: (compiler) => {
// //       compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
// //         exec('./post-build.js', (err, stdout, stderr) => {
// //           if (stdout) process.stdout.write(stdout);
// //           if (stderr) process.stderr.write(stderr);
// //         });
// //       });
// //     }
// //   }

// ]

module.exports = webpackConfig;