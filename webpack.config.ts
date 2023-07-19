import path from "path"
import { Configuration } from "webpack"
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig"
import { type BuildEnv, BuildPaths } from "./config/webpack/types/config"

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
	}

	const mode = env.mode || "development"
	const port = env.port || 3000
	const isDev = mode === "development"

	const config: Configuration = buildWebpackConfig({
		mode: mode,
		paths: paths,
		isDev: isDev,
		port: port,
	})
	return config
}
