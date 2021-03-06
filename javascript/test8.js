function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}



msgAfterTimeout("", "Foo", 1000).then((msg) =>{
    return msgAfterTimeout(msg, "Bar", 2000)
}).then((msg) => {
    console.log(`done after 2000ms:${msg}`)
    return msgAfterTimeout(msg, "puff", 1000)
}).then((msg) => {
    console.log(`done again after 2000ms:${msg}`)
})



/*
var mypo = msgAfterTimeout("", "Foo", 500)

mypo.then((msg) => {
    console.log(`done after 500ms:${msg}`)
})
*/
/*

var mypro = msgAfterTimeout("", "Foo", 1000)

console.log("after first")
mypro.then(function(str1) {
    console.log('here1:'+str1)
    return msgAfterTimeout(str1, "Bar", 1000)  
}).then(function(str2){
    console.log('here2:'+str2)
    return msgAfterTimeout(str2, "puff", 1000)
}).then((msg) => {
    console.log('here3'+msg)
})

*/
