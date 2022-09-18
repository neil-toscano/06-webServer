const http=require('http');
http.createServer( (req,res)=>{
    //console.log(req);
    const persona={
        id:1,
        nombre:'Fernando'
    }
   // res.writeHead(200,{'Content-type':'application/json'});
    //res.write(JSON.stringify(persona));
    res.write("Hola mundo");
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto ',8080);