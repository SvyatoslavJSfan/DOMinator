/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales:path.resolve(__dirname, 'build', 'locales'),
    }
  
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    const apiURL = env.apiURL || 'http://localhost:8000'
  
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiURL,
        project: 'frontend'
    })

    return config
}