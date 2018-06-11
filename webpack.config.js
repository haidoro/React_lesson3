const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publidDir = path.join(__dirname, '/dist');
module.exports = [
  {
    entry: [
      './src/app.js',
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'app.js',
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
     devServer:{
      contentBase: './dist',
      port: 8080,
      inline: true
    },
  },
  {
    entry: {
      style: './sass/style.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
