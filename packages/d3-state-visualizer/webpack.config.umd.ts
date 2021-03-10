// eslint-disable-next-line no-var
var path = require('path');

module.exports.default = (env) => ({
  // mode: env.production ? 'production' : 'development',
  entry: {
    app: ['./src/index'],
  },
  output: {
    library: 'd3-state-visualizer',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: env.production
      ? 'd3-state-visualizer.min.js'
      : 'd3-state-visualizer.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: ['ramda', 'd3'],
});
