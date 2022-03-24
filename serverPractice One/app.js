// console.log("jimmi jan")
const http = require("http")

const server = http.createServer(function (request, responce) {
    const path = request.url;
    if (path === '/') {
        responce.write("hello wolrd");
        responce.end();
    } else if (path === '/about') {
        responce.write("about Page")
    } else if (path === "/form") {
        responce.write(
            "<form action='/userdata'  method='POST'><input placeholder='enter your name' name='name1' /> <button>SUBMIT </button></form>"
        )
        responce.end()
    }
})

server.listen(3000, console.log("server is running at0000"))