const http = require('http');

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
  // res.writeHead(200, { 'Content-Type': 'application/csv' });
  // const person = {
  //   id: 1,
  //   name: 'Rob',
  // };
  // res.write(JSON.stringify(person));
  // res.write('id, nombre\n');
  // res.write('1, Rob\n');
  // res.write('2, Cotu\n');
  // res.write('3, Sofy\n');
  res.write('Hola Mundo');
  res.end();
});

server.listen(8080);

console.log('Escuchando el puerto', 8080);
