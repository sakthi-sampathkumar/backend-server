//express
const { json } = require('body-parser')
let exp=require('express')

var app=exp() //for init
var fs=require('fs')
var url=require('url')

app.get('/',(req,res)=>{
    res.send("hi and welcome")
})
app.get('/home', (req, res)=>{ //just viewing
    res.send({msg:"welcome home"})
 })
 app.get('/fileread', (req, res)=>{  //to read a file
    fs.readFile('data.json', function (err, data) {
       if (err) //when file name wrong it will show invalid error
          res.send({msg:"invalid", code:err})
   
       res.send(JSON.parse(data))
   });
 })
 app.get('/filewrite',(req,res)=>{ //to add data in json file
    var query = url.parse(req.url,true).query;
    fs.readFile('data.json',function(err,data){
        if(err)
            res.send({msg:'invalid',code:err})

        let mydata=JSON.parse(data)
        console.log(mydata);
        mydata.push(query)
        var result=JSON.stringify(mydata)
        fs.writeFile('data.json',result, function (err) { 
            if (err)
                console.log(err);
            else
                res.send("sucess")
        });
    })
 })

app.listen(3003)
console.log('running on port 3003')