const path = require('path');
const webpack = require('webpack');

const common = {
  context: __dirname + '/client',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: [['env', { "modules": false }], 'react', 'stage-0'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/static',
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];
// const SRC_DIR = path.resolve(__dirname, 'client');
// const BUILD_DIR = path.resolve(__dirname, 'static');

// module.exports = {
//   entry: path.resolve(SRC_DIR, 'index.jsx'),
//   output: {
//     filename: 'bundle.js',
//     path: BUILD_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: [/node_modules/],
//         use: [{
//           loader: 'babel-loader',
//           options: { presets: [['env', { "modules": false }], 'react', 'stage-0'] }
//         }],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ]
//   },
//   performance: {
//     hints: false
//   },
// }