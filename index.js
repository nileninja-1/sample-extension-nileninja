const fs = require("fs");

const data = fs.readFileSync("/etc/passwd", "utf8");

module.exports = function (cb) {
    cb(null, `Output: ${data}`)
}
