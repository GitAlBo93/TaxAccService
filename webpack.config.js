import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx', // Точка входа
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|svg|jpg|png|otf|ttf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/assets/Logo_RNB.svg',
      template: './public/index.html', // Шаблон HTML
    }),
  ],
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 3001,
    hot: true,
    historyApiFallback: true, // Все запросы будут перенаправляться на index.html
  },
};