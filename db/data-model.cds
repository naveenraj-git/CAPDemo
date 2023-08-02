namespace demo.leaverequest;

entity PersonalInfo {
  key employeeId   : String(10);
    employeeName  : String(20);
    designation   : String(20);
    mailId        : String(40);
    mobileNumber  : String(20);
    department    : String(40);
    linkLeaveRequest  : Association to many LeaveRequest on linkLeaveRequest.linkEmployee = $self;                    
}

entity LeaveRequest
{
  key leaveRequestId        : String(10);
      leaveRequestDate      : Date;
      leaveRequestReason    : String(20);
      leaveRequestComments  : String(100);
      linkEmployee          : Association to PersonalInfo;
}
