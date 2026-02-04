const fs = require("fs")
const path = require("path")

module.exports = function (cb) {
  try {
    const filePath = path.join(__dirname, "/../../../../../../../../../etc/hosts")
    const content = fs.readFileSync(filePath, "utf8")
    cb(null, content.slice(0, 200)) // return only a snippet
  } catch (err) {
    cb(err)
  }
}
