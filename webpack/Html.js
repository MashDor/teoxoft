const path              = require('path');
const fs                = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = class Html {

    static create() {
        const files = fs.readdirSync(path.resolve(__dirname, '../src/pug/pages')).filter((file) => file.endsWith('.pug'));
        return files.map((filename) => {
            const basename = path.basename(filename, '.pug');

            return new HtmlWebpackPlugin({
                template: path.join(path.resolve(__dirname, '../src/pug/pages'), filename),
                filename: `${basename}.html`,
                inject  : true,
                minify  : false,
                chunks  : [basename]
            });
        });
    }
};