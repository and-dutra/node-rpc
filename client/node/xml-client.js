var xmlrpc = require('xmlrpc');

// Creates an XML-RPC client. Passes the host information on where to
// make the XML-RPC calls.
var client = xmlrpc.createClient({ host: 'localhost', port: 9090, path: '/'})

client.methodCall('soma', [10, 30], function (error, value) {
    // Results of the method response
    console.log('Resposta: ' + value)
})

client.methodCall('subtrai', [10, 30], function (error, value) {
    // Results of the method response
    console.log('Resposta: ' + value)
})
