var xmlrpc = require('xmlrpc')
 
// Creates an XML-RPC server to listen to XML-RPC method calls
var server = xmlrpc.createServer({ host: 'localhost', port: 9090 })
// Handle methods not found
server.on('NotFound', function(method, params) {
  console.log('Method ' + method + ' does not exist');
})

server.on('soma', function (err, params, callback) {
    let resposta = 'Somando ' + params[0] + ' + ' + params[1] + ' = ' + (params[0] + params[1]) 
    //console.log(resposta)
    
    callback(null, resposta)
})

server.on('subtrai', function (err, params, callback) {
    let resposta = 'Subtraindo ' + params[0] + ' - ' + params[1] + ' = ' + (params[0] - params[1]) 
    //console.log(resposta)
    
    callback(null, resposta)
})

console.log('XML-RPC server listening on port 9091')
 
// Waits briefly to give the XML-RPC server time to start up and start
// listening