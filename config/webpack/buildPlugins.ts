import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { DefinePlugin, HotModuleReplacementPlugin, type WebpackPluginInstance } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      _IS_DEV: JSON.stringify(isDev)
    })
  ]
}
