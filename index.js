module.exports = async function (cb) {
  try {
    const request = new Request("https://example.com", {
      method: "GET",
      headers: {
        "User-Agent": "ssrf-capability-test"
      }
    })

    const response = await fetch(request)
    const text = await response.text()

    cb(null, {
      status: response.status,
      bodySnippet: text.slice(0, 200)
    })
  } catch (err) {
    cb(err)
  }
}
