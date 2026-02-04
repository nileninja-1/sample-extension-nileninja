const { exec } = require("child_process")

module.exports = function (cb) {
  exec("uname -a", (err, stdout, stderr) => {
    if (err) {
      return cb(err)
    }
    cb(null, stdout.trim())
  })
}
