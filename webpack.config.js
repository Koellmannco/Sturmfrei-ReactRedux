var path = require('path');
var html_plugin =  require('html-webpack-plugin');
var webpack =  require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output:{
    filename: './dist/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    publicPath: "/",
    contentBase: path.resolve(__dirname, 'dist'),
    port:8080,
    host:'0.0.0.0',
    disableHostCheck: true
  },
  plugins:[
    new html_plugin({inject:'body',template:'index.html'})
  ],
  module:{
    loaders:[
      {
        test: /\.js(x)?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          presets:[
            'react',
            ['es2015', {'modules':false}],
            'stage-0'
          ],
          plugins:[
            'jsx-control-statements',
            'transform-decorators-legacy'
          ],
        }
      }
    ]
  },
  resolve:{
    modules:[
      path.resolve(__dirname,"src"),
      "node_modules"
    ]
  },
  devtool:"source-map"

};
