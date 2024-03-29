const express = require('express')

const bodyParser = require('body-parser')

const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
 

app.listen(3000,function(){
    console.log('Server starts on port 3000')
})

app.post('/',function(req,res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    if(req.body.oper=='+'){
        var ans = num1+num2
        res.send("The result is "+ans)
    }else if(req.body.oper=='-'){
        var ans = num1-num2
        res.send("The result is "+ans)
    }else if(req.body.oper=='*'){
        var ans = num1*num2
        res.write("The result is "+ans)
        res.write()
    }else if(req.body.oper=='/'){
        var ans = num1/num2
        res.send("The result is "+ans)
    }else if(req.body.oper=='%'){
        var ans = num1%num2
        res.send("The result is "+ans)
    }else{
        res.send("Invalid Operator")
    }
})

app.get("/bmicalculator.html",function(req,res){
    res.sendFile(__dirname+'/bmicalculator.html')
})

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var bmi = weight/(height*height)
    res.send("The BMI is "+bmi)
})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+'/index.html')
})