const path = require('path');
const { FuseBox} = require("fuse-box");
console.log('##############',path.resolve(__dirname, '/level1/'),2 ,__dirname);
const fuse = FuseBox.init({
  homeDir: ".",
  target: "server@esnext",
  output: "dist/$name.js",
  alias: {
    // "level1": path.resolve(__dirname, '/level1/'),
    "level1": __dirname+  '/level1/',
    // "level1": "~/level1"
  },
  // plugins: [WebIndexPlugin()],
});
// fuse.dev(); // launch http server

fuse
  .bundle("index")
  .instructions(" > index.ts")
  // .hmr()
  .watch();
fuse.run();


// const { fuseBox} = require("fuse-box");
// const {FuseBox} = require("fuse-box");
// const fuse = fusebox({
//   homeDir: ".",
//   entry: 'index.ts',
//   output: "dist/$name.js",
//   devServer: false,
//   webIndex: false,
//     alias: {
//     "level1": path.resolve(__dirname, 'level1/'),
//   },
// });
// fuse.runDev();