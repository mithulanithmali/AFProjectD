const express= require('express');
const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index');
})

const port = 3000;

app.listen(port,()=>console.log('server running on'+port))