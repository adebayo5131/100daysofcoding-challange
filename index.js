const express = require('express')
const app = express()


const port = 4000;

app.get('/',function(req,res){
    res.send("You hit the homepage welcome mate!")
})


app.get('/ade',function(req,res){
    res.send("You hit Ade's page. What are you doing here!")
})


app.get('/:app',function(req,res){
    res.send("You hit Ade's page. What are you doing here!")
})
app.listen(port, () => 