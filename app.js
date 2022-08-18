const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/login',(req,res,next)=>{

    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/product" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>');
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
res.send('sonu');

});





app.listen(201);