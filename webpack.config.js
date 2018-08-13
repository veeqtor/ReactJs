const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env', 'react', 'stage-2'] },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=500000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    descriptionFiles: ['package.json'],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/build/',
    hotOnly: true,
  },
  // plugins: [],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
