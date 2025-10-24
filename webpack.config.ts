/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiURL?: string) {
    if (apiURL) {
        return apiURL;
    }
    if (mode === 'production') {
        return '/api';
    }

    return 'http://localhost:8000';
}

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales:path.resolve(__dirname, 'build', 'locales'),
    }
  
    const mode = env?.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env?.port || 3000
    const apiURL = getApiUrl(mode, env?.apiURL)
  
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