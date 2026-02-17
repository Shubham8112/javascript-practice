const express = require('express');
const PORT = 3000;
const app = express();
app.get('/hello',(req,res)=>{
    const user = {
        name: 'Tom',
        age:24
    }
    res.json(user);
})
app.get('/shubham',(req,res)=>{
    res.send("Shubham Pandey is a passionate and dedicated third-year BTech student specializing in Web Development. He is someone who genuinely enjoys learning new technologies and continuously improving his skills.");
})
app.get('/',(req,res)=>{
    res.send('Response from Server');
})
app.get('/search',(req,res)=>{
    console.log(req.query);
    // res.json(req.query);
    res.send('Query received')
})
app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    console.log('User id =',userId);
    res.send(`Your userId is ${userId}`);
})
app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})