const express = require('express');
const cors = require('cors');
const app= express();

app.use(express.json());
app.use(cors( ));
app.post('/login', async(rep, res)=>{
   
    res.cookie('name','Abhishek Prajapati');
    res.status(200).send('login successfull')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})