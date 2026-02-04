const https = require("https")

module.exports = async function (cb) {
  try {
    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: "169.254.169.254",
        port: 443,
        path: "/",
        method: "GET",
        headers: {
          "User-Agent": "ssrf-capability-test"
        },
        timeout: 5000
      }

      const req = https.request(options, (res) => {
        let data = ""

        res.on("data", chunk => {
          data += chunk
        })

        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            bodySnippet: data.slice(0, 200)
          })
        })
      })

      req.on("error", reject)
      req.on("timeout", () => {
        req.destroy(new Error("Request timed out"))
      })

      req.end()
    })

    cb(null, result)
  } catch (err) {
    cb(err)
  }
}
