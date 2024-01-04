//express
let exp=require('express')

var app=exp() //for init
var fs=require('fs')

app.get('/',(req,res)=>{
    res.send("hi and welcome")
})
app.get('/home', (req, res)=>{ //just viewing
    res.send({msg:"welcome"})
 })
 app.get('/fileread', (req, res)=>{  //to read a file
    fs.readFile('data.json', function (err, data) {
       if (err) //when file name wrong it will show invalid error
          res.send({msg:"invalid", code:err})
   
       res.send(JSON.parse(data))
   });
 })

app.listen(3002)
console.log('running on port 3002')