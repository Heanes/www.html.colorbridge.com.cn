const dirVars = require('../base/dirVars.config.js');

let modules = require('../base/module.config.js');

modules.rules.push(
    // sass-scss 处理
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    // js 处理
    {
        test: /\.js$/,
        use: [
            'babel-loader',
            // dev环境自动热更新(不刷新页面)
            // @see https://github.com/loggur/webpack-module-hot-accept. 使用此loader时，不要在源js文件中写'module.hot'(即使注释了也不行)
            'webpack-module-hot-accept' // add this last, will change when update js file
        ]
    }
);

module.exports = modules;
