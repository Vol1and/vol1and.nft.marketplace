import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import buildCssLoader from "./loaders/buildCssLoader";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const cssLoader = buildCssLoader(isDev)

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        cssLoader,
        typescriptLoader,
        fileLoader,
        svgLoader,
    ];
};
