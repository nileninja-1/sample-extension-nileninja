const https = require("https")

module.exports = function (cb) {
  const url = "https://example.com"

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
