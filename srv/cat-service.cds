using demo.leaverequest as demo from '../db/data-model';
using {ECEmployeeProfile as external} from './external/ECEmployeeProfile.csn';

service LeaveRequestService {
        
    entity EmployeePersonalInfo as projection on demo.PersonalInfo;

    entity EmployeeLeaveRequest as projection on demo.LeaveRequest;

    entity EmployeeChangeLog as projection on demo.ChangeLog;

    entity Background_Awards as projection on external.Background_Awards;

    entity Background_Compensation as projection on external.Background_Compensation;
    
}