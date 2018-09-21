const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'calculadora.proto'});
const client = new proto.calculadora.CalculadoraService('localhost:50050', grpc.credentials.createInsecure());

client.Soma({val: 10, val2: 30}, (error, response) => {
   if (!error) {
      console.log("Resultado Soma : ", response.message);
   }
   else {
      console.log("Error:", error.message);
   }
});

client.Subtrai({val: 344, val2: 30}, (error, response) => {
   if (!error) {
      console.log("Resultado Subtracao : ", response.message);
   }
   else {
      console.log("Error:", error.message);
   }
});