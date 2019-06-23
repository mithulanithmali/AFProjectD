const express = require('express');
const fileUpload = require('express-fileupload');
const CORS = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const app = express();
const PORT = 4000;     

app.use(fileUpload());

app.use(CORS({ origin: 'http://localhost:3000',credentials:true }));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/',routes);

app.post('/uploadfile' ,(req ,res) => {
    if(req.files === null){
        return res.status(400).json({msg : 'No file uploaded'});
    }
    const file = req.files.file;

    file.mv(`C:/Users/ASUS/Desktop/AF_ProjectDD/frontend/public/uploadedfiles/${file.name}` , err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName : file.name , filePath : `/uploadedfiles/${file.name}`});
    })
});
app.listen(PORT,(err)=>{
   if(err){
       console.error('Error: '+err);
   }else
       console.log('Server is  running on Port: '+PORT);
});