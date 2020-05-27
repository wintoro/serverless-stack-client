// const webpack = require('webpack');

module.exports = function override(config, env) {

    return config;
}

// '/node_modules/simplify-codegen/entrypoint.js'
// test: /\.js/,
// /node_modules[/\\]simplify-codegen[/\\]entrypoint.js/,


// config.module.rules.push(
//     {
//         test: /node_modules[/\\]simplify-codegen[/\\]entrypoint.js/,
//         use: [{ loader: 'shebang-loader' }]
//     },
// )

// if (!config.plugins) {
//     config.plugins = [];
// }
// config.plugins.push(
//     new webpack.BannerPlugin({
//         banner: "#!/usr/bin/env node",
//         raw: true
//     })
// );