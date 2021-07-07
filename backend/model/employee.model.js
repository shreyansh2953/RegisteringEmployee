const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    name :String,
    position : String,
    office : String,
    salary : Number
})

const employeeModel = mongoose.model('employees',employeeSchema);
module.exports = employeeModel;