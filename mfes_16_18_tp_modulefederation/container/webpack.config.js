const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:3041/remoteEntry.js'
      }
    })
  ],
  devServer: {
    port: 3040,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    hot: true
  }
};


