import path from 'path'
class Path {
    constructor(currentPath, ...args) {
        this.path = path.join(currentPath, ...args)
    }
    get(...args) {
        return path.join(this.path, ...args);
    }
}
export default Path