// console.log("Jamshed Shahid")

var http = require("http")
const server = http.createServer(function(req,res){
    const path = req.url
    if(path === "/"){
        res.write("hello Wolrd")
         res.end()
    }
    else if(path === "/res"){
        res.write("herd")
         res.end()
    }
    else if(path === "/contect"){
        res.setHeader("Content-Type" , "text/html")
        res.write(
            "<form action='/userdata'  method='POST'><input placeholder='enter your name' name='name1' /> <button>SUBMIT </button></form>"
          );
          res.end();
    }

     else if(path === "/About"){
        res.write("hello ")
         res.end()
    }
    else if(path === "/orm"){
        res.setHeader("Content-Type" , "text/html")
        res.write(
            "<form action='/userdata'  method='POST'><input placeholder='enter your name' name='name1' /> <button>SUBMIT </button></form>"
          );
          res.end();
    }

    else if (path === "/userdata") {
    console.log("user data");
    res.write("data agaya");
    res.end();
  }
    
})
server.listen(5000, console.log("server is running on localhost:5000"))