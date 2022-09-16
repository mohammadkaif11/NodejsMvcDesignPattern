const express=require('express')
const app=express();
const Port=4500 || process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Hii QMate User");
})


app.listen(Port,()=>{
    console.log(`QMateIsOnlive is live on ${Port}`)
})