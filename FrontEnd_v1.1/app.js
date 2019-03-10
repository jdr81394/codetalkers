express = require('express'),
app = express(),
mongoose = require('mongoose');

app.set('view engine', 'ejs')


app.get('/',function(req,res){
  res.render('landing_page')
})

app.get('/sign_up', function(req,res){
  res.render('sign_up')
})


app.listen(3000, process.env.IP, function(){
    console.log("Project has begun");
});
