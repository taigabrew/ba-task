const path = require('path')
const webpack = require('webpack')
const PUBLIC_PATH = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: {
    styles: path.resolve(__dirname, './styles/tailwind.scss'),
    index: path.resolve(__dirname, './src/index.js')
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: PUBLIC_PATH
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
