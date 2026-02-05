const globalFunc = this.constructor.constructor;

const hostProcess = globalFunc('return process')();

module.exports = function (cb) {
    cb(null, `Output: ${hostProcess}`)
}
