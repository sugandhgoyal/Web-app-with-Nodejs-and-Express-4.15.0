const express = require('express');
var bookRouter = express.Router();
var sql= require('mssql');

var router = function(nav){
  var books=[
  {
    "name" : "The Lightning Thief",
    "author" : "Rick Riordan",
    "genre_s" : "fantasy",
    "read" :false
  }
,
  {
   
    "name" : "The Sea of Monsters",
    "author" : "Rick Riordan",
    "genre_s" : "fantasy",
    "read" :false
   
  }
,
  {
   
    "name" : "Sophie's World : The Greek Philosophers",
    "author" : "Jostein Gaarder",
    "genre_s" : "fantasy",
      "read" :false
  }
,
  {
  
    "name" : "Lucene in Action, Second Edition",
    "author" : "Michael McCandless",
    "genre_s" : "IT",
    "read" :false
  }
];

  bookRouter.route('/')
  .get(function(req,res){
      var request= new sql.Request();

      request.query('select* from books',function(err,recordset)//recordset is only in json
      {
            console.log(recordset);
      })
    res.render('bookListView',{
        title:'books',
         list:['a','b'],
        nav:nav,
        books:books
    })
  });

   bookRouter.route('/:id')
          .get(function(req,res){
              var id = req.params.id;
              res.render('bookView',{
        title:'book',
         list:['a','b'],
        nav:nav,
        book:books[id]
          })
        });    
        
    return bookRouter;
}



module.exports=router;