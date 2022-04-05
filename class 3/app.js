const express = require("express")
const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded( {extended : true}))

app.use("/", (req,res,next)=>{
    const user = false
    if(user){
        next()
    }else{
        res.end("Koooooooo")
    }

    app.post("/api/user", (req, res) => {
        console.log(req);
        res.send(req.body);
      });

      app.delete("/api/deleteuser", (req, res) => {
        console.log(req);
        res.send(req.body);
      });


      app.get("/api/getuser", (req, res) => {
        console.log(req.query``);
        res.send("Query selector");
      });
})

app.listen(port, console.log(`Server running on localhost:${port}`));