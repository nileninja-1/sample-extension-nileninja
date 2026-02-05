const globalFunc = this.constructor.constructor;

module.exports = function (cb) {
    cb(null, `Output: ${globalFunc}`)
}
