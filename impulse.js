const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

//使用中间件,不使用签名
app.use(cookieParser());

// //若需要使用签名，需要指定一个secret,字符串,否者会报错
// app.use(cookiePareser('Simon'));

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/client', { useMongoClient: true });

// var ClientSchema = mongoose.Schema({
//   ````
// });
// var Client = mongoose.model('Client', ClientSchema);

// var Client = mongoose.model('Client', {
//   opid: String,
//   mocode: String,
//   customerclient: String
// });

// 设置static中间件,为后面将发送的静态文件创建路由
app.use(express.static(__dirname + '/public'));

const handlebars = require('express-handlebars').create({
  layoutDir:  'views/',
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
//set template's engine
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);


//home page routers
app.get('/', function(req, res) {
  // var credentials = require('./lib/credentials.js');
  var credentials = {
    opid: req.query.opid,
    mcode: req.query.mcode
  };
  res.cookie("name", credentials, {maxAge: 900000, httpOnly:true });
  res.redirect('http://localhost:3000/loading');    

  /* mongoose存储系列 */
  // res.render('home');
  // var credentials = require('./lib/credentials.js');
  // var client1 = new Client({
  //   opid: credentials.opid,
  //   mcode: credentials.mcode,
  //   customerclient: credentials.customerclient
  // });
  // client1.save(function(err) {
  //   if(err) {
  //     console.log('There is an error in client1.save, check it!');
  //   }else {
  //     console.log("success");
  //   }
  // });
});

// loading page routers
app.get('/loading', function(req, res) {
  res.render('loading', req.cookies.name);
  console.log(req.cookies.name.opid)
});  


// 404 catch-all handler
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

// 500 error handler
app.use(function(req, res, err) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-c to terminate.');
});



