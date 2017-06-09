const express = require('express');
const app = express()
var config={
    user:'books',
    password:'pluralsight1@',
    server:'localhost\\instance',
    database:'Books',
    options:{
        encrypt:true
    }
};

var port=process.env.PORT || 3000;
var handlebars= require('express-handlebars');
var  nav=[{
            Link:'/Books',
            Text:'Books'
        },
        {
            Link:'/Authors',
            Text:'Authors'
        }];

var bookRouter = require('./src/routes/book.js')(nav);
app.use(express.static('public'));
app.set('views','src/views');
app.use('/Books',bookRouter)
app.set('view engine','.ejs');

app.get('/',function(req,res){
    res.render('index',{
        title:'hello from render',
         list:['a','b'],
        nav:[{
            Link:'/Books',
            Text:'Books'
        },
        {
            Link:'/Authors',
            Text:'Authors'
        }]
    });
})

app.get('/books',function(req,res){
    res.send('hello books');
})
app.listen(port,function(err){
    console.log('port : ',port)
})