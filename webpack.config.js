const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    filename: 'algoSorter.js',
    library: 'algoSorter',
    libraryTarget: 'umd',
  },
};
