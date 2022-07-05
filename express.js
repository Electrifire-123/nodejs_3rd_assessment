const express = require('express');


const Middlewareforall = (res,req,next) => {
    //middlewareforall
    console.log(`Logged ${res.url}`)
    next();
}

const Middlewarefortwo = (res,req,next) => {
    //middlerwarefortwo
    console.log(`Logged ${res.url}`)
    next();
}
const app = express();
const port = 4001;
app.use(Middlewareforall);

app.get('/',(req,res) => {
    res.send('This is home')
})//home
app.get('/about',(req,res) => {
    res.send('This is about')
})
app.get('/contact',(req,res) => {
    res.send('This is contact')
})
app.get('/:user',Middlewarefortwo,(req,res) => {
    res.send('This is user')
    console.log(res.user)

})
app.get('/product',Middlewarefortwo,(req,res) => {
    res.send('This is product')
})

app.listen(port,()=> {
    console.log(`app is running on port ${port}`);
})