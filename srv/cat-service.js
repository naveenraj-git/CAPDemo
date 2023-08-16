const cds = require('@sap/cds');
const crypto = require("crypto");
const {LeaveRequest,ChangeLog} = cds.entities('demo.leaverequest');

module.exports = cds.service.impl(async function() {  
    
    this.before('CREATE','EmployeePersonalInfo', validateEmployeeCreate);

    this.on('READ','EmployeePersonalInfo', readEmployees); 

    this.on('UPDATE','EmployeePersonalInfo', validateEmployeeChanges); 

    this.before('DELETE','EmployeePersonalInfo', validateEmployeeDelete);    
   
    this.on('READ', 'Position', readPostions);
});

const readPostions = async (req,next) =>
{
     const service = await cds.connect.to('sf');
    // var positionData = await service.run(req.query);   
    // return positionData;
      
    const {Position} = service.entities;
    var positionData = await service.run(SELECT.from(Position).where({ code: "201" })); 
    return positionData;
}

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


    