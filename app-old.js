const http = require('http');

http.createServer( (req, res) => {
    res.write('Hola Mundo');
    res.end();
})
.listen(3000);
console.log('escuchando en puerto 3000');