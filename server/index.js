const grpc = require('grpc');
const proto = grpc.load('proto/calculadora.proto');
const server = new grpc.Server();
//const employeeServices = require('../db/employees');

server.addService(proto.calculadora.CalculadoraService.service, {
    Soma(call, callback) {
        let resultado = call.request.val + call.request.val2;
        callback(null, {message: resultado});
    }, 
    Subtrai(call, callback) {
        let resultado = call.request.val - call.request.val2;
        callback(null, {message: resultado});
    }, 
});


server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');