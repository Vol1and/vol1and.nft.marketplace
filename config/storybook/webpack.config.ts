import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const src: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

    config.resolve?.modules?.push(src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule): webpack.RuleSetRule => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildCssLoader(true));
    }

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
