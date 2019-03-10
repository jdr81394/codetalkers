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

app.post('/sign_up'function(req,res){
  //get data from form and add to campgrounds array
var name = req.body.name;
var price = req.body.price;
var image = req.body.image;
var desc = req.body.description;
var author = {
    id: req.user._id,
    username: req.user.username
};
var newCampground = {name:name, price:price, image:image, description: desc, author:author};
//Create a new campground and save to DB
Campground.create(newCampground, function(err,newlyCreated){
if(err){
    console.log(err);
} else {
    //redirect to campgrounds
    console.log(newlyCreated)
    res.redirect("profile");
}
})


app.listen(3000, process.env.IP, function(){
    console.log("Project has begun");
});
