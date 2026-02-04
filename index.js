const os = require("os")

module.exports = function (cb) {
  const uname = `${os.type()} ${os.release()} ${os.arch()}`
  cb(null, uname)
}
