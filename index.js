module.exports = {}

module.exports.Imgur = class Imgur {
    constructor() {
        return require('./lib/imgur')
    }
}

if (require.main !== module) {
    module.exports = new module.exports.Imgur()
} else {
    module.exports.cli = require('./lib/cli')
}