const { execSync } = require("child_process")

module.exports = function (cb) {
  try {
    const output = execSync("uname -a", { encoding: "utf8" })
    cb(null, output.trim())
  } catch (e) {
    cb(e)
  }
}
