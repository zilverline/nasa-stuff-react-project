const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {

  // Create config
  let config = {
    plugins: [],
    module: {
      rules: []
    }
  }

  // App entry point
  config.entry = {
    app: ['./src/index.js']
  }

  // Output location
  config.output = {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  }

  // Optimizations
  config.optimization = {
    minimize: !!env.prod
  }

  // Prevent loading of node specific packages
  config.resolve = {
    fallback: {
      fs: false,
      util: false,
      stream: false,
    }
  }

  // Show compilation errors
  config.stats = {
    children: true
  }

  // Add HTML page plugin
  config.plugins.push(new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    inject: true
  }))

  // Add support for the NodeJS 'process' var
  config.plugins.push(new webpack.ProvidePlugin({
    process: 'process/browser.js',
  }))

  // Add support for JS and JSX
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  })

  // Add support for JS and JSX
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  })

  // Add support for resource files
  config.module.rules.push({
    test: /\.(png|svg|jpg|gif|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          esModule: false // Required so that calling `require()` on a file actually works.
        },
      },
    ],
  })

  // Add support for CSS
  config.module.rules.push({
    test: /\.(css)$/,
    use: ['style-loader', 'css-loader']
  })

  // Add dev server options
  config.devtool = env.prod ? 'source-map' : 'inline-source-map'
  config.devServer = {
    client: {
      overlay: false,
      progress: false,
      reconnect: true,
    },
    historyApiFallback: true,
    compress: true,
    hot: false,
    host: '0.0.0.0',
    port: 3000
  }

  // Done
  return config

}
