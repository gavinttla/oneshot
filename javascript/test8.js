function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 1000).then((msg) =>
    msgAfterTimeout(msg, "Bar", 2000)
).then((msg) => {
    console.log(`done after 2000ms:${msg}`)
    msgAfterTimeout(msg, "puff", 1000)
}).then((msg) => {
    console.log(`done again after 2000ms:${msg}`)
})

