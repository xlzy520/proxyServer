const path = require('path');
const analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const useAnalyzer = process.env.use_analyzer === 'true';
const plugins = useAnalyzer ? [new analyzer()] : [];
module.exports = {
  entry: './bin/www', // 单入口
  mode: 'production',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  target: 'node', // 这是最关键的
  plugins,
};
