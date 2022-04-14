const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
MiniCssExtractPlugin

module.exports = {
  entry: './src/index.js', //punto de entrada de la aplicación
  output: { //salida de la aplicación
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: 'emotions-App/bundle.js',
    // publicPath: '/'
    publicPath: '/emotions-App/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}