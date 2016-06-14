//require an express instance application becomes an instance
//order matters
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout:'main'})); //goes to main for layout 
app.set('view engine', 'handlebars'); //npm documentation readddd
app.use(express.static(__dirname + '/public'));

//incoming request matches, top to bottom. 

app.get("/", function(req, res){ //function is a handler for the incoming request, get request to the root app points to root
	res.render('home'); //req request, res response //render the page
}); 


app.get("/about", function(req, res){
	res.render('about');
});

app.get("/inspiration", function(req, res){
	res.render('inspiration');
});

app.listen(3000, function(){
	console.log('Inspriation app listening on port 3000...');
});