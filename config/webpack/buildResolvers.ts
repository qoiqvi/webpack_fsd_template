import { type ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
<<<<<<< HEAD
=======
    // alias: {
    //   '@': options.paths.src
    // }
>>>>>>> c452aa4041529bc068c8e08280034e27a9f96a69
    alias: {}
  }
}
