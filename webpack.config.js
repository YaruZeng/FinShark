const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // assuming your entry file is named index.tsx
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // specify the folder to serve your static files from
    port: 3000,
    hot: true,
    open: true,
  },
};
