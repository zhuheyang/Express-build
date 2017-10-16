const express = require('express');
const app = express();

const handlebars = require('express-handlebars').create({
  layoutDir:  'views/',
  defaultLayout: 'main'
});

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine);
//set template's engine
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);


// loading page routers
app.get('/loading', function(req, res) {
  res.render('loading');
})  


// 404 catch-all handler
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// 500 error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-c to terminate.');
});



