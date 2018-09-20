const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'employees.proto'});
const client = new proto.employees.EmployeesService('localhost:50050', grpc.credentials.createInsecure());

client.List({}, (error, response) => {
   if (!error) {
      console.log("Response : ", response)
   }
   else {
      console.log("Error:", error.message);
   }
});

client.get({
   employee_id: 860294//parseInt(Math.random() * 1000000)
}, (error, response) => {
   console.log("error, response : ", error, response)
   if (!error) {
      console.log("Response : ", response)
   }
   else {
      console.log("Error:", error.message);
   }
});

/*client.remove({
   employee_id: 178646//parseInt(Math.random() * 1000000)
}, (error, response) => {
   if (
      !error
   ) {
      console.log("Response : ", response)
   }
   else {
      console.log("Error:", error.message);
   }
});
*/
client.Insert({
   employee_id: parseInt(Math.random() * 1000000),
   name: "Andre Dutra",
   email: "andredutra@univem.edu.br"
}, (error, response) => {
   if (
      !error
   ) {
      console.log("Response : ", response)
   }
   else {
      console.log("Error:", error.message);
   }
});