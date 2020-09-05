const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index", // string | object | array
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "main.js", // string
  },
  resolve: {
    // 如果同个文件夹中存在同名不同后缀的文件，按照顺序解析文件，如果前面已经解析，那么后面就不再解析。
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "eval-source-map",
  // 配置内部信息：https://webpack.docschina.org/configuration/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(ts|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    // 将 css 拆分为多个文件，并行加载，增加网络请求，减少等待时间
    new ExtractTextPlugin('css/[name]-[contenthash].css'),
    //// 复制 html 资源文件
    //// new CopyWebpackPlugin([{
    ////   from: '*.html',
    //// }])
  ]
}
