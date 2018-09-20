const grpc = require('grpc');
global.Mongoose = require('mongoose');
Mongoose.connect('mongodb://grpc:grpc123@ds211143.mlab.com:11143/grpc');

const proto = grpc.load('proto/employees.proto');
const server = new grpc.Server();
const employeeServices = require('../db/employees');

server.addService(proto.employees.EmployeesService.service, {

   List(call, callback){
      employeeServices.list(callback);
   },

   get(call, callback){
      let payload = {
         criteria: {
            employee_id: call.request.employee_id
         },
         projections: {
            _id: 0, __v: 0
         },
         options: {
            lean: true
         }
      };
      let emp = new employeeServices(payload);
      emp.fetch(callback);
   },

   Insert(call, callback){
      let emp = new employeeServices({
         employee_id: call.request.employee_id,
         name: call.request.name,
         email: call.request.email,
      });
      emp.add(callback);
   },

   remove(call, callback){
      const criteria = {
         employee_id: call.request.employee_id,
      };
      let emp = new employeeServices(criteria);
      emp.remove(criteria, callback);
   },
});


server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');