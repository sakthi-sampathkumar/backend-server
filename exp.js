let exp=require('express')

var app=exp()

app.get('/',(req,res)=>{
    res.send("hi and welcome")
})
app.listen(6000)
console.log('running on port 6000')