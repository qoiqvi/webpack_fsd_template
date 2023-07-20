import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          native: true
        }
      }
    ]
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  return [
    svgLoader, //
    fileLoader,
    tsLoader,
    cssLoader
  ]
}
