const http = require("http")
const port = 8080

const server = http.createServer(function(req,res){
    const Path = req.url
    if(Path === "/"){
        res.write("hello Jimmi")
        res.end()
    }
    else if(Path === "/about"){
        res.write("hello Jimmi")
        res.end()
    }

    else if(Path === "/form"){
        res.setHeader("Content-Type", "text/html")
        res.write(`
          <form method="POST" action="/userdata">
          <input placeholder="enter your name" name="username" />
          <button>LOGIN</button>
          </form> `)
        res.end()
    }


   else if(Path === "/userdata"){
        // res.write("user Data")
        let data = ""
        req.on("data", (chunk)=>{
            console.log("data Ageya")
            data = chunk
        })
        req.on("end",()=>{
            console.log(data , "data")
        })
        res.write("data recived")
        res.end()
    }
    else {
            res.write("404 page not found");
            res.end();
          }
})

server.listen(port , console.log("Server is running on localhost:8000"))