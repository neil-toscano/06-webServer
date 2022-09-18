const express = require('express')
const hbs=require('hbs');
require('dotenv').config();
const app = express();
const port=process.env.PORT;
//Servir contenido estatico
//handelbars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials',function(err){});
app.use( express.static('public'));
app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Toscano Fernandez Neil',
        titulo:'Curso de Node'
    });//entre parentesis van los argumentos
    });
    //generic============================
    app.get('/generic', function (req, res) {
        res.render('generic',
        {
            nombre:'Toscano Fernandez Neil',
            titulo:' Curso de Node'
        })
      });
      //elements ============================
    app.get('/elements', function (req, res) {
        res.render('elements',
        {
            nombre:'Toscano Fernandez Neil',
            titulo:' Curso de Node'
        })
      });

    //========================================//

  app.get('/index', function (req, res) {
    res.sendFile(__dirname+'/public/templated-roadtrip/index.html')
  });
app.get('/generic', function (req, res) {
   res.sendFile(__dirname+'/public/templated-roadtrip/generic.html')
  });
  app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/templated-roadtrip/elements.html')
   });
// app.get('*', function (req, res) {
//   res.sendFile(__dirname+'/public/404.html')
// });
app.get('*',function(req,res){
    res.sendFile(__dirname+'/public/templated-roadtrip/index.html');
})


app.listen(port,()=>{
    console.log(`puertoo:${port}`);
})