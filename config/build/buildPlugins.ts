/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiURL, project }: BuildOptions): webpack.WebpackPluginInstance[] {

    const isProd = !isDev

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiURL),
            __PROJECT__: JSON.stringify(project)
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),

    ]

    
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())

        /**
         * Bundle analyzer is opt-in for local debugging to avoid runtime errors
         * when dev-server keeps assets in memory (no files on disk).
         * Enable with ANALYZE=true yarn start.
         */
        if (process.env.ANALYZE === 'true') {
            plugins.push(new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'server',
            }))
        }
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))

        plugins.push(new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales }
            ]
        }))
    }

    return plugins
}