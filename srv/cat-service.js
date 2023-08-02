const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {  
    
    this.before('CREATE','EmployeePersonalInfo', validateEmployeeCreate);

    this.on('UPDATE','EmployeePersonalInfo', validateEmployeeChanges); 
});

const validateEmployeeCreate = async (req) => 
{
    if(req.data.employeeId.length>5)
    return req.reject({code:"500", message: "Invalid Employee Id, Cannot be more than 5 chars"}); 
    else
    return req.info({code:"200", message: "New Employee Created"}); 
}
const validateEmployeeChanges = async (req) => 
{
    console.log("Request data from UI:",req.data);
    if(req.data.employeeName==="")
    return req.reject({code:"500", message: "Employee Name cannot be Empty"}); 
    else
    return req.info({code:"200", message: "Employee Changes Saved"}); 
}


    