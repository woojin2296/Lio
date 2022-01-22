const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();



app.listen(8080, function(){
    mongoose.connect(process.env.MONGODB_URL, (err)=>{
        if(err){
            console.log("Err", err);
        }
        else {
            console.log("Connection Successful");
        }
    });
});

app.get('/hello', function(req, res){
    res.send('You just enter hello page')
});