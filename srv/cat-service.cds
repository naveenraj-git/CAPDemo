using demo.leaverequest as demo from '../db/data-model';

service LeaveRequestService {
        
    entity EmployeePersonalInfo as projection on demo.PersonalInfo;

    entity EmployeeLeaveRequest as projection on demo.LeaveRequest;
}