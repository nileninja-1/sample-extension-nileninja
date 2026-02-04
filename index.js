const https = require("https")

module.exports = function (cb) {
  const url = "http://127.0.0.1"

  https.get(url, (res) => {
    let data = ""

    res.on("data", chunk => {
      data += chunk
    })

    res.on("end", () => {
      cb(null, {
        statusCode: res.statusCode,
        bodySnippet: data.slice(0, 200)
      })
    })
  }).on("error", (err) => {
    cb(err)
  })
}
