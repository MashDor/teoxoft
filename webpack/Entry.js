const path = require('path');
const fs   = require('fs');

module.exports = class Entry {
    static create() {
        const files = fs.readdirSync(path.resolve(__dirname, '../src/js')).filter((file) => file.endsWith('.js'));
        return files.reduce((acc, filename) => {
            const basename = path.basename(filename, '.js');
            return {...acc, [basename]: path.join(path.resolve(__dirname, '../src/js'), filename)}
        }, {});
    }
};