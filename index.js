module.exports = async function (cb) {
  try {
    const res = await fetch("https://169.254.169.254/")
    const text = await res.text()

    cb(null, {
      status: res.status,
      bodySnippet: text.slice(0, 200)
    })
  } catch (err) {
    cb(err)
  }
}
