const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hii QMate User");
})


app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });