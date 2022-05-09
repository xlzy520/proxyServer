const path = require('path');
const analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [];
const useAnalyzer = process.env.use_analyzer === 'true';
if (useAnalyzer) {
  plugins.push(new analyzer());
}

module.exports = {
  entry: './app.js', // 单入口
  mode: 'production',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  target: 'node', // 这是最关键的
  plugins,
};
