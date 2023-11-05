const path = require('path')
class Path {
    constructor(currentPath, ...args) {
        this.path = path.join(currentPath, ...args)
    }
    get(...args) {
        return path.join(this.path, ...args);
    }
}
module.exports = Path