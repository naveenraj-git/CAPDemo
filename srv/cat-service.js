const cds = require('@sap/cds');
const crypto = require("crypto");
const {LeaveRequest,ChangeLog} = cds.entities('demo.leaverequest');

module.exports = cds.service.impl(async function() {  
    
    this.before('CREATE','EmployeePersonalInfo', validateEmployeeCreate);

    this.on('READ','EmployeePersonalInfo', readEmployees); 

    this.on('UPDATE','EmployeePersonalInfo', validateEmployeeChanges); 

    this.before('DELETE','EmployeePersonalInfo', validateEmployeeDelete); 

    const { Background_Awards } = this.entities;
    const service = await cds.connect.to('sf');

    const { Position } = this.entities;
  
    this.on('READ', Position, request => {
        return service.tx(request).run(request.query);
    });

});

const readEmployees = async (req,next) =>
{
    var entity = next();
    return entity;
}
const validateEmployeeDelete = async (req) => 
{
    var empId = req.data.employeeId;
    var leaveRequestList = await SELECT.from(LeaveRequest).where({linkEmployee_employeeId:empId});
    console.log("Emp Leave req.", leaveRequestList);

    if(leaveRequestList.length>0)
    {
        return req.reject({code:"400",message:"Employee has Leave Request Pending, Cannot be deleted"});
    }
    else
    { 
        const uuid = crypto.randomUUID();
        var insertedRecords = await INSERT.into(ChangeLog).values(uuid, empId, new Date());
        console.log("insertedRecords",insertedRecords);

        req.info({code:"200", message: "Employee Deleted"}); 
    }
    
}
const validateEmployeeCreate = async (req) => 
{
    if(req.data.employeeId.length>5)
    req.error({code:"400", message: "Invalid Employee Id, Cannot be more than 5 chars"}); 
    else
    req.info({code:"200", message: "New Employee Created"}); 
}
const validateEmployeeChanges = async (req) => 
{
    console.log("Request data from UI:",req.data);
    if(req.data.employeeName==="")    
    {
     return req.error(400,"Employee Name cannot be Empty");         
    }
    else
     req.info("Employee Changes Saved"); 
}


    